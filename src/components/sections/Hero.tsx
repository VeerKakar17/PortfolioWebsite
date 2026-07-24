import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { siteLinks } from '../../data/projects';
import { theme } from '../../styles/theme';

const HeroSection = styled.section`
  min-height: calc(78vh - 4.5rem);
  display: flex;
  align-items: center;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.xl} 0 ${theme.spacing.lg};

  .container {
    max-width: 1080px;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUp} 0.45s ease-out forwards;
  color: ${theme.colors.light};
  font-size: clamp(2.7rem, 8vw, 5rem);
  line-height: 1.05;
  margin-bottom: ${theme.spacing.md};
`;

const Positioning = styled.p`
  animation: ${fadeUp} 0.45s ease-out 0.1s forwards;
  opacity: 0;
  color: ${theme.colors.textLight};
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.35;
  max-width: 850px;
  margin-bottom: ${theme.spacing.md};
`;

const Description = styled.p`
  animation: ${fadeUp} 0.45s ease-out 0.2s forwards;
  opacity: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 720px;
  line-height: 1.75;
  margin-bottom: ${theme.spacing.lg};
`;

const ActionRow = styled.div`
  animation: ${fadeUp} 0.45s ease-out 0.3s forwards;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const HeroLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  min-height: 42px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 6px;
  color: ${theme.colors.textLight};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-weight: 800;
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.light};
    border-color: ${theme.colors.accent};
    background: rgba(204, 35, 236, 0.16);
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <Title>Veer Kakar</Title>
          <Positioning>Systems software, embedded robotics, real-time graphics, and production Android.</Positioning>
          <Description>
            I am a computer science student building projects close to the metal: a Raspberry Pi 5 OS, CUDA and
            graphics work, embedded robot swarms, voxel engine systems, and shipped team software.
          </Description>
          <ActionRow aria-label="Primary links">
            <HeroLink href={siteLinks.resume} download>
              <FaFileAlt aria-hidden="true" />
              Resume
            </HeroLink>
            <HeroLink href={siteLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub
            </HeroLink>
            <HeroLink href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </HeroLink>
            <HeroLink href={siteLinks.email}>
              <FaEnvelope aria-hidden="true" />
              Email
            </HeroLink>
          </ActionRow>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
