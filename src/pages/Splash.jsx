import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../data/profile';

const INTRO_MS = 2600;

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => navigate('/browse', { replace: true }), reduceMotion ? 600 : INTRO_MS);
    return () => clearTimeout(timer);
  }, [navigate]);

  const skip = () => navigate('/browse', { replace: true });

  return (
    <button type="button" className="splash" onClick={skip} aria-label="Skip intro">
      <span className="splash-logo">{profile.name}</span>
      <span className="splash-hint">Click anywhere to skip</span>
    </button>
  );
}

export default Splash;
