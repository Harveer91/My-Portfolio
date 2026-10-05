import { useEffect, useMemo, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { viewers } from './data/profile';
import { ViewerContext } from './viewerContext';
import Layout from './components/Layout';
import Splash from './pages/Splash';
import ProfilePicker from './pages/ProfilePicker';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const STORAGE_KEY = 'portfolio-viewer';

function App() {
  const [viewerId, setViewerId] = useState(() => localStorage.getItem(STORAGE_KEY) ?? viewers[0].id);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, viewerId);
  }, [viewerId]);

  const value = useMemo(
    () => ({ viewer: viewers.find((v) => v.id === viewerId) ?? viewers[0], setViewerId }),
    [viewerId],
  );

  return (
    <ViewerContext.Provider value={value}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/browse" element={<ProfilePicker />} />
          <Route element={<Layout />}>
            <Route path="/profile/:viewerId" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ViewerContext.Provider>
  );
}

export default App;
