import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { KeyboardEvent, MouseEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaFileAlt, FaGithub } from 'react-icons/fa';
import { additionalProjects, featuredProjects, type Project, type ProjectLinkKind } from '../../data/projects';
import { theme } from '../../styles/theme';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.xl} 0;
`;

const SectionHeader = styled.div`
  max-width: 780px;
  margin-bottom: ${theme.spacing.xl};

  h2 {
    color: ${theme.colors.light};
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: rgba(255, 255, 255, 0.78);
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.7;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
`;

const ProjectCard = styled(motion.article)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: ${theme.transitions.default};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  cursor: ${(props: { $interactive?: boolean }) => (props.$interactive ? 'pointer' : 'default')};

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(204, 35, 236, 0.48);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  }
`;

const ProjectVisual = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(42, 45, 62, 0.24);
`;

const TechnicalVisual = styled.div`
  height: 100%;
  padding: ${theme.spacing.md};
  display: grid;
  align-content: center;
  gap: ${theme.spacing.sm};
  background:
    linear-gradient(135deg, rgba(0, 255, 255, 0.08), transparent 44%),
    linear-gradient(180deg, rgba(204, 35, 236, 0.12), rgba(42, 45, 62, 0.18));
`;

const VisualLine = styled.div`
  min-height: 32px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.86);
  border-left: 3px solid ${theme.colors.accent};
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.85rem;
`;

const ImageNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(42, 45, 62, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${theme.colors.light};
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &:hover {
    background: rgba(204, 35, 236, 0.6);
  }
`;

const PrevButton = styled(ImageNavButton)`
  left: ${theme.spacing.sm};
`;

const NextButton = styled(ImageNavButton)`
  right: ${theme.spacing.sm};
`;

const ImageIndicators = styled.div`
  position: absolute;
  bottom: ${theme.spacing.sm};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: 1px solid ${theme.colors.light};
  background: ${(props) => (props.active ? theme.colors.light : 'rgba(42, 45, 62, 0.58)')};
  padding: 0;
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  margin-bottom: ${theme.spacing.sm};
`;

const Status = styled.p`
  color: ${theme.colors.accent};
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: ${theme.spacing.xs};
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
  margin-bottom: ${theme.spacing.lg};
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
`;

const TechTag = styled.span`
  background: rgba(42, 45, 62, 0.42);
  color: ${theme.colors.textLight};
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.07);
`;

const Action = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  min-height: 38px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 6px;
  color: ${theme.colors.textLight};
  background: rgba(255, 255, 255, 0.07);
  font-size: 0.9rem;
  font-weight: 700;
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.light};
    background: rgba(204, 35, 236, 0.2);
  }
`;

const DetailAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  min-height: 38px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 6px;
  color: ${theme.colors.textLight};
  background: rgba(204, 35, 236, 0.18);
  font-size: 0.9rem;
  font-weight: 800;

  &:hover {
    color: ${theme.colors.light};
    background: rgba(204, 35, 236, 0.32);
  }
`;

const AdditionalBlock = styled.div`
  margin-top: ${theme.spacing.xl};

  h3 {
    color: ${theme.colors.light};
    font-size: clamp(1.35rem, 3vw, 1.8rem);
    margin-bottom: ${theme.spacing.md};
  }
`;

const iconForLink = (kind: ProjectLinkKind) => {
  if (kind === 'github') return <FaGithub aria-hidden="true" />;
  if (kind === 'docs') return <FaFileAlt aria-hidden="true" />;
  return <FaExternalLinkAlt aria-hidden="true" />;
};

const ProjectCardView = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images ?? [];
  const hasMultipleImages = images.length > 1;

  const openDetails = () => {
    if (project.disableDetails) return;

    if (project.detailLink) {
      window.location.href = project.detailLink.url;
      return;
    }

    navigate(`/projects/${project.slug}`);
  };

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a, button')) return;
    openDetails();
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      openDetails();
    }
  };

  const goToPreviousImage = () => {
    setImageIndex((current) => (current > 0 ? current - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setImageIndex((current) => (current < images.length - 1 ? current + 1 : 0));
  };

  return (
    <ProjectCard
      $interactive={!project.disableDetails}
      role="article"
      tabIndex={project.disableDetails ? -1 : 0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-labelledby={`project-title-${project.slug}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <ProjectVisual>
        {images.length > 0 ? (
          <ProjectImage imageUrl={images[imageIndex]} role="img" aria-label={`${project.title} screenshot`} />
        ) : (
          <TechnicalVisual aria-label={`${project.title} technical summary visual`}>
            {(project.visualLines ?? project.tags.slice(0, 4)).map((line) => (
              <VisualLine key={line}>{line}</VisualLine>
            ))}
          </TechnicalVisual>
        )}
        {hasMultipleImages && (
          <>
            <PrevButton type="button" onClick={goToPreviousImage} aria-label={`Previous ${project.title} screenshot`}>
              <FaChevronLeft aria-hidden="true" />
            </PrevButton>
            <NextButton type="button" onClick={goToNextImage} aria-label={`Next ${project.title} screenshot`}>
              <FaChevronRight aria-hidden="true" />
            </NextButton>
            <ImageIndicators aria-hidden="true">
              {images.map((image, index) => (
                <Indicator key={image} active={index === imageIndex} type="button" onClick={() => setImageIndex(index)} />
              ))}
            </ImageIndicators>
          </>
        )}
      </ProjectVisual>
      <ProjectContent>
        {project.status && <Status>{project.status}</Status>}
        <ProjectTitle id={`project-title-${project.slug}`}>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <TechStack aria-label={`${project.title} technologies`}>
          {project.tags.slice(0, 6).map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStack>
        {(!project.disableDetails || project.links.length > 0) && (
          <ProjectLinks>
            {!project.disableDetails && (
              <DetailAction type="button" onClick={openDetails}>
                {project.detailLink?.label ?? 'Details'}
                <FaExternalLinkAlt aria-hidden="true" />
              </DetailAction>
            )}
            {project.links.map((link) => (
              <Action key={`${project.slug}-${link.label}`} href={link.url} target="_blank" rel="noopener noreferrer">
                {iconForLink(link.kind)}
                {link.label}
              </Action>
            ))}
          </ProjectLinks>
        )}
      </ProjectContent>
    </ProjectCard>
  );
};

const Projects = () => {
  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured projects">
      <div className="container">
        <SectionHeader>
          <h2>Featured Projects</h2>
          <p>
            Project-focused writeups across operating systems, GPU programming, embedded robotics, production mobile
            engineering, graphics, and shipped games.
          </p>
        </SectionHeader>

        <ProjectGrid role="list">
          {featuredProjects.map((project) => (
            <ProjectCardView key={project.slug} project={project} />
          ))}
        </ProjectGrid>

        {additionalProjects.length > 0 && (
          <AdditionalBlock>
            <h3>Additional Projects</h3>
            <ProjectGrid role="list">
              {additionalProjects.map((project) => (
                <ProjectCardView key={project.slug} project={project} />
              ))}
            </ProjectGrid>
          </AdditionalBlock>
        )}
      </div>
    </ProjectsSection>
  );
};

export default Projects;
