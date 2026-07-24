import styled from '@emotion/styled';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaFileAlt } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { projects, type ProjectLinkKind } from '../data/projects';

const Page = styled.article`
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.xl} 0;

  .container {
    max-width: 980px;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};
  font-weight: 600;

  &:hover {
    color: ${theme.colors.light};
  }
`;

const Header = styled.header`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const Status = styled.p`
  color: ${theme.colors.light};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
`;

const Title = styled.h1`
  color: ${theme.colors.light};
  font-size: clamp(2.2rem, 6vw, 4rem);
  margin-bottom: ${theme.spacing.md};
`;

const Summary = styled.p`
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  max-width: 820px;
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-height: 42px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 6px;
  color: ${theme.colors.textLight};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-weight: 700;
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.light};
    border-color: ${theme.colors.accent};
    background: rgba(204, 35, 236, 0.16);
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
`;

const Tag = styled.span`
  color: ${theme.colors.light};
  background: rgba(42, 45, 62, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 600;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.lg} 0;
`;

const Screenshot = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Section = styled.section`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};

  h2 {
    color: ${theme.colors.light};
    font-size: clamp(1.4rem, 3vw, 2rem);
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    color: ${theme.colors.textLight};
    font-size: 1.1rem;
    margin: ${theme.spacing.lg} 0 ${theme.spacing.sm};
  }

  p,
  li {
    color: rgba(255, 255, 255, 0.84);
    line-height: 1.75;
  }

  p + p {
    margin-top: ${theme.spacing.md};
  }

  ul {
    padding-left: 1.25rem;
  }

  li + li {
    margin-top: ${theme.spacing.sm};
  }
`;

const EmptyLinks = styled.p`
  margin-top: ${theme.spacing.lg};
  color: rgba(255, 255, 255, 0.72);
`;

const linkIcon = (kind: ProjectLinkKind) => {
  if (kind === 'github') return <FaGithub aria-hidden="true" />;
  if (kind === 'docs') return <FaFileAlt aria-hidden="true" />;
  return <FaExternalLinkAlt aria-hidden="true" />;
};

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page>
      <div className="container">
        <BackLink to="/#projects">
          <FaArrowLeft aria-hidden="true" />
          Projects
        </BackLink>

        <Header>
          {project.status && <Status>{project.status}</Status>}
          <Title>{project.title}</Title>
          <Summary>{project.summary}</Summary>
          {project.links.length > 0 ? (
            <LinkRow aria-label={`${project.title} links`}>
              {project.links.map((link) => (
                <ActionLink key={`${link.label}-${link.url}`} href={link.url} target="_blank" rel="noopener noreferrer">
                  {linkIcon(link.kind)}
                  {link.label}
                </ActionLink>
              ))}
            </LinkRow>
          ) : (
            <EmptyLinks>Repository, docs, or demo links can be added here when they are ready to share publicly.</EmptyLinks>
          )}
          <TagList aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
        </Header>

        {project.images && (
          <MediaGrid aria-label={`${project.title} screenshots`}>
            {project.images.map((image) => (
              <Screenshot key={image} src={image} alt={`${project.title} screenshot`} loading="lazy" />
            ))}
          </MediaGrid>
        )}

        <Section>
          <h2>Overview</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Section>

        <Section>
          <h2>Technical Highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2>Architecture / Implementation</h2>
          {project.implementation.map((section) => (
            <div key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section>
          <h2>Challenges</h2>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2>Results / Metrics / Screenshots</h2>
          <ul>
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </Section>

        {project.nextSteps && (
          <Section>
            <h2>Next Steps / What I Learned</h2>
            <ul>
              {project.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </Page>
  );
};
