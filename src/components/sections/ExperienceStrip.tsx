import styled from '@emotion/styled';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { experienceItems } from '../../data/projects';
import { theme } from '../../styles/theme';

const ExperienceSection = styled.section`
  padding: ${theme.spacing.lg} 0 ${theme.spacing.xl};

  .container {
    max-width: 1080px;
  }
`;

const Header = styled.div`
  margin-bottom: ${theme.spacing.md};

  h2 {
    color: ${theme.colors.light};
    font-size: clamp(1.3rem, 3vw, 1.75rem);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: ${theme.spacing.md};
`;

const Item = styled.article`
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: ${theme.spacing.md};

  h3 {
    color: ${theme.colors.textLight};
    font-size: 1rem;
    margin-bottom: ${theme.spacing.xs};
  }

  p {
    color: rgba(255, 255, 255, 0.76);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    color: ${theme.colors.accent};
    font-size: 0.9rem;
    font-weight: 700;
    margin-top: ${theme.spacing.sm};
  }

  a:hover {
    color: ${theme.colors.light};
  }
`;

const ExperienceStrip = () => {
  return (
    <ExperienceSection id="experience" aria-label="Selected experience">
      <div className="container">
        <Header>
          <h2>Selected Experience</h2>
        </Header>
        <Grid>
          {experienceItems.map((item) => (
            <Item key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {item.links?.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
              ))}
            </Item>
          ))}
        </Grid>
      </div>
    </ExperienceSection>
  );
};

export default ExperienceStrip;
