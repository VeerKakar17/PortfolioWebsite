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
    font-size: 1.05rem;
    margin-bottom: 2px;
  }

  .role {
    color: ${theme.colors.light};
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 2px;
  }

  .period {
    color: rgba(255, 255, 255, 0.58);
    font-size: 0.82rem;
    font-weight: 700;
    margin-bottom: ${theme.spacing.sm};
    text-transform: uppercase;
  }

  p {
    color: rgba(255, 255, 255, 0.76);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: ${theme.spacing.md};
  }

  .tag {
    border-radius: 999px;
    background: rgba(42, 45, 62, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.74rem;
    font-weight: 800;
    padding: 4px 8px;
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
    <ExperienceSection id="experience" aria-label="Work experience">
      <div className="container">
        <Header>
          <h2>Work Experience</h2>
        </Header>
        <Grid>
          {experienceItems.map((item) => (
            <Item key={item.title}>
              <h3>{item.title}</h3>
              {item.role && <p className="role">{item.role}</p>}
              {item.period && <p className="period">{item.period}</p>}
              {item.tags && (
                <div className="tags" aria-label={`${item.title} technologies`}>
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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
