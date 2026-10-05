import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { profile } from '../data/profile';
import { useViewer } from '../viewerContext';
import Avatar from './Avatar';

function Navbar() {
  const { viewer } = useViewer();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const home = `/profile/${viewer.id}`;

  const links = [
    { to: home, label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'navbar--solid' : ''}`}>
      <Link to={home} className="brand" aria-label={`${profile.name} home`}>
        {profile.name}
      </Link>

      <nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} aria-label="Main">
        {links.map(({ to, label }) => (
          <NavLink key={label} to={to} className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-actions">
        <Link to="/browse" className="navbar-viewer" title="Switch profile">
          <Avatar viewer={viewer} size="sm" />
          <span className="sr-only">Switch profile (current: {viewer.name})</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
