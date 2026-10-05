import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { profile } from '../data/profile';
import PageHeader from '../components/PageHeader';

function Contact() {
  const { github, linkedin, email } = profile.links;
  return (
    <div className="page page--narrow">
      <PageHeader title="Contact Me" />
      <div className="contact-card">
        <img src={profile.photo} alt={profile.name} className="contact-photo" />
        <div>
          <h2>{profile.name}</h2>
          <p className="muted">{profile.title}</p>
          <p className="muted small">
            {profile.education.program} @ {profile.education.school}
          </p>
        </div>
      </div>

      <p className="contact-lead">I&apos;m open to new opportunities and collaborations. Feel free to reach out!</p>

      <div className="contact-actions">
        {email && (
          <a className="pill" href={`mailto:${email}`}>
            <FaEnvelope className="pill-icon" /> {email}
          </a>
        )}
        {github && (
          <a className="pill" href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="pill-icon" /> github.com/{github.split('/').pop()}
          </a>
        )}
        {linkedin && (
          <a className="pill" href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="pill-icon" /> LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default Contact;
