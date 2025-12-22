import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(204, 35, 236, 0.2);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-color: ${theme.colors.glass.card};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ImageNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(246, 177, 122, 0.2);
  color: ${theme.colors.accent};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  z-index: 10;
  opacity: 0;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    border-color: ${theme.colors.accent};
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(204, 35, 236, 0.2); 
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      background: ${theme.colors.glass.background};
      color: ${theme.colors.accent};
      transform: translateY(-50%) scale(1);
      box-shadow: none;
    }
  }

  svg {
    font-size: 16px;
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
  z-index: 10;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.accent};
  background: ${props => props.active ? theme.colors.accent : 'transparent'};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  padding: 0;

  &:hover {
    background: ${theme.colors.accent};
    transform: scale(1.2);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.light};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.light};
    color: ${theme.colors.textLight};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(204, 35, 236, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: "Transforma Tech Generators for ACE",
    description: "Designed and developed a full-stack application end-to-end that automatically generates IBM App Connect Enterprise (ACE) integration projects from input JSON, XML, or DFDL schemas. The system maps inputs to configurable templates to produce ESQL code, message flows, and messaging infrastructure, including MQ queues and Kafka topics. Built using Spring Boot for the backend and React for the frontend.",
    images: ["/PortfolioWebsite/TTGenerators1.png", "/PortfolioWebsite/TTGenerators2.png", "/PortfolioWebsite/TTGenerators3.png"],
    techStack: ["Java", "Spring Boot", "Messaging Systems", "Apache Kafka", "System Design", "RESTful API Design", "Code Generation"],
    liveUrl: "http://www.transformatech.com/products/transformatech-accelerators-for-ibm-ace/"
  },
  {
    id: 2,
    title: "Mini-Minecraft",
    description: "Developed a high-performance Minecraft recreation in C++ using OpenGL, with a focus on real-time rendering and systems-level optimization. Implemented multithreaded terrain generation and face-culling to minimize rendering overhead, and designed a custom redstone logic system from scratch. Repository is private, but code is available upon request. Demo video can be seen with the link below.",
    images: ["/PortfolioWebsite/MiniMinecraftBlock.png", "/PortfolioWebsite/MiniMinecraftInventory.png", "/PortfolioWebsite/MiniMinecraftRedstone.png"],
    techStack: ["C++", "Graphics (OpenGL)", "Multithreading & Concurrency", "Performance Optimization", "Systems Programming"],
    liveUrl: "https://www.youtube.com/playlist?list=PLS0hPwkzcr9sHUFkR2NTA9FKZixdtvJLW",
  },
  {
    id: 3,
    title: "Game Mash",
    description: "Built a full-stack web application to aggregate and query large-scale game datasets (4 datasets with 100,000+ entries each). Designed and normalized a relational database schema, implemented data preprocessing pipelines, and deployed a PostgreSQL backend on AWS for efficient querying and search. Repository is private, but code is available on request.",
    images: ["/PortfolioWebsite/GameMashSearchScreen.png", "/PortfolioWebsite/GameMashGenreScreen.png", "/PortfolioWebsite/GameMashInfoScreen.png"],
    techStack: ["Relational Databse Systems", "AWS", "PostgreSQL", "Full-Stack Development", "Data Processing", "System Design"],
  },
  {
    id: 4,
    title: "Catanks",
    description: "Developed a 3D Wii Tanks–inspired game built in Unity as part of a 30+ person team, with the project published on Steam and Itch.io. Collaborated across engineering and design teams using professional game development workflows to ship a production-ready title.",
    images: ["https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3793790/a9e03a2d727e9d9b8bffecbaa8fa8ba8360b9116/header.jpg?t=1758729503"],
    techStack: ["Unity", "C#", "Game Development", "Large-Scale Team Collaboration", "Software Engineering Practices"],
    githubUrl: "https://github.com/pennupgrade/catanks",
    liveUrl: "https://store.steampowered.com/app/3793790/Catanks",
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [selectedImages, setSelectedImages] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const handlePrevImage = (projectId: number, totalImages: number) => {
    setSelectedImages(prev => ({
      ...prev,
      [projectId]: prev[projectId] > 0 ? prev[projectId] - 1 : totalImages - 1,
    }));
  };

  const handleNextImage = (projectId: number, totalImages: number) => {
    setSelectedImages(prev => ({
      ...prev,
      [projectId]: prev[projectId] < totalImages - 1 ? prev[projectId] + 1 : 0,
    }));
  };

  const handleIndicatorClick = (projectId: number, index: number) => {
    setSelectedImages(prev => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {projects.map((project) => {
            const currentImageIndex = selectedImages[project.id];
            const hasMultipleImages = project.images.length > 1;
            
            return (
              <ProjectCard 
                key={project.id} 
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImageContainer>
                  <ProjectImage 
                    imageUrl={project.images[currentImageIndex]} 
                    role="img" 
                    aria-label={`Screenshot of ${project.title}`} 
		    alt="image"
                  />
                  {hasMultipleImages && (
                    <>
                      <PrevButton
                        onClick={() => handlePrevImage(project.id, project.images.length)}
                        aria-label="Previous image"
                      >
                        <FaChevronLeft />
                      </PrevButton>
                      <NextButton
                        onClick={() => handleNextImage(project.id, project.images.length)}
                        aria-label="Next image"
                      >
                        <FaChevronRight />
                      </NextButton>
                      <ImageIndicators>
                        {project.images.map((_, index) => (
                          <Indicator
                            key={index}
                            active={index === currentImageIndex}
                            onClick={() => handleIndicatorClick(project.id, index)}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </ImageIndicators>
                    </>
                  )}
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {project.githubUrl && <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub aria-hidden="true" />
                      <span className="sr-only">GitHub repository</span>
                    </a>}
                    {project.liveUrl && <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                      <span className="sr-only">Live site</span>
                    </a>}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            );
          })}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
