import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { profile } from '../data/profile';

function Footer() {
  const { github, linkedin, email } = profile.links;
  return (
    <footer className="footer">
      <div className="footer-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        )}
      </div>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}

export default Footer;
