import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaDatabase, FaMicrochip, FaNetworkWired, FaServer } from 'react-icons/fa';
import { MdArchitecture, MdSpeed } from 'react-icons/md';
import { theme } from '../../styles/theme';

interface SkillGroup {
  title: string;
  icon: IconType;
  items: string[];
}

const coreStrengths = [
  'Kernel / OS internals',
  'CUDA + GPU architecture',
  'Graphics engine programming',
  'Backend infrastructure',
  'Bare-metal embedded firmware',
  'Database systems',
];

const coursework = [
  'Operating Systems',
  'GPU Programming & Architecture',
  'Computer Graphics',
  'Distributed Systems',
  'Embedded Systems',
  'Databases',
  'Network Security',
  'Algorithms',
  'Rust',
  'Machine Learning',
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Systems Programming',
    icon: FaMicrochip,
    items: ['C/C++ systems programming', 'Rust', 'AArch64 / ARMv8-A', 'Virtual memory + paging', 'Filesystems / VFS', 'Device drivers'],
  },
  {
    title: 'Graphics + GPU',
    icon: MdSpeed,
    items: ['CUDA kernel programming', 'GPU architecture', 'OpenGL rendering pipelines', 'Vulkan', 'Real-time rendering engines', 'Profiling and optimization'],
  },
  {
    title: 'Backend Infrastructure',
    icon: FaServer,
    items: ['Service boundaries', 'RPC contracts', 'Schema design', 'Consistency semantics', 'Temporal workflows', 'Post-launch metrics'],
  },
  {
    title: 'Distributed + Security',
    icon: FaNetworkWired,
    items: ['Distributed systems', 'Network security', 'Concurrency', 'Async execution', 'Fault tolerance', 'Kafka / IBM MQ'],
  },
  {
    title: 'Embedded Robotics',
    icon: FaMicrochip,
    items: ['Bare-metal firmware', 'ATmega328PB / ESP32', 'SPI and ESP-NOW', 'Motor control', 'IR proximity sensing', 'Robot coordination'],
  },
  {
    title: 'Data + Product Engineering',
    icon: FaDatabase,
    items: ['PostgreSQL + SQL', 'BCNF data modeling', 'Query optimization', 'Kotlin / Jetpack Compose', 'React / TypeScript', 'CI/CD + team workflows'],
  },
];

const SkillsSection = styled.section`
  padding: ${theme.spacing.xl} 0;
  color: ${theme.colors.textLight};

  .container {
    max-width: 1080px;
  }
`;

const SectionHeader = styled.div`
  max-width: 780px;
  margin-bottom: ${theme.spacing.lg};

  h2 {
    color: ${theme.colors.light};
    font-size: clamp(1.75rem, 4vw, 2.4rem);
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: rgba(255, 255, 255, 0.78);
    font-size: clamp(0.98rem, 2vw, 1.1rem);
    line-height: 1.7;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing.lg};
  align-items: stretch;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const StrengthPanel = styled(motion.article)`
  background: rgba(0, 255, 255, 0.065);
  border: 1px solid rgba(0, 255, 255, 0.22);
  border-radius: 8px;
  padding: ${theme.spacing.lg};

  h3 {
    color: ${theme.colors.light};
    font-size: 1rem;
    letter-spacing: 0;
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
  }
`;

const StrengthList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StrengthTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 34px;
  border-radius: 6px;
  padding: 8px 10px;
  color: ${theme.colors.textDark};
  background: ${theme.colors.light};
  font-size: 0.82rem;
  font-weight: 800;
`;

const Panel = styled(motion.article)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: ${theme.spacing.lg};
`;

const PanelTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-size: 1.08rem;
  margin-bottom: ${theme.spacing.md};

  svg {
    color: ${theme.colors.accent};
    flex: 0 0 auto;
  }
`;

const CourseworkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const CourseTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  border-radius: 6px;
  padding: 6px 10px;
  background: rgba(42, 45, 62, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.86rem;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: ${theme.spacing.md};
`;

const SkillCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: ${theme.spacing.md};
`;

const SkillItems = styled.ul`
  list-style: none;
  display: grid;
  gap: 7px;

  li {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing.xs};
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.9rem;
    line-height: 1.45;

    &::before {
      content: '';
      flex: 0 0 6px;
      width: 6px;
      height: 6px;
      margin-top: 0.55em;
      border-radius: 999px;
      background: ${theme.colors.accent};
    }
  }
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <SkillsSection id="skills" aria-label="Skills and relevant coursework">
      <div className="container">
        <SectionHeader>
          <h2>Skills & Coursework</h2>
          <p>
            A systems-heavy CS background led by operating systems, GPU programming, real-time graphics, backend
            infrastructure, distributed systems, embedded work, databases, security, and algorithms.
          </p>
        </SectionHeader>

        <ContentGrid>
          <TopGrid>
            <StrengthPanel variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3>Core Strengths</h3>
              <StrengthList>
                {coreStrengths.map((item) => (
                  <StrengthTag key={item}>{item}</StrengthTag>
                ))}
              </StrengthList>
            </StrengthPanel>

            <Panel variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <PanelTitle>
                <MdArchitecture aria-hidden="true" />
                Relevant CS Coursework
              </PanelTitle>
              <CourseworkGrid>
                {coursework.map((course) => (
                  <CourseTag key={course}>{course}</CourseTag>
                ))}
              </CourseworkGrid>
            </Panel>
          </TopGrid>

          <SkillsGrid>
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <SkillCard key={group.title} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <PanelTitle>
                    <Icon aria-hidden="true" />
                    {group.title}
                  </PanelTitle>
                  <SkillItems>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </SkillItems>
                </SkillCard>
              );
            })}
          </SkillsGrid>
        </ContentGrid>
      </div>
    </SkillsSection>
  );
};

export default Skills;
