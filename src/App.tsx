import { lazy, Suspense, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { ProjectDetail } from './pages/ProjectDetail';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const ExperienceStrip = lazy(() => import('./components/sections/ExperienceStrip'));
const Contact = lazy(() => import('./components/sections/Contact'));

const LoadingFallback = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  font-size: 1rem;

  @media print {
    display: none;
  }
`;

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.pathname, location.hash]);

  return null;
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFallback>Loading projects...</LoadingFallback>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading skills...</LoadingFallback>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading experience...</LoadingFallback>}>
        <ExperienceStrip />
      </Suspense>
      <Suspense fallback={<LoadingFallback>Loading contact...</LoadingFallback>}>
        <Contact />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HashRouter>
        <ScrollToHash />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
