import { FaGraduationCap } from 'react-icons/fa6';
import { profile } from '../data/profile';
import PageHeader from '../components/PageHeader';

function About() {
  return (
    <div className="page">
      <PageHeader title="About Me" />
      <div className="about">
        <img className="about-photo" src={profile.photo} alt={profile.name} />
        <div className="about-text">
          <h2>
            Hi, I&apos;m {profile.shortName}. <span className="muted">{profile.title}.</span>
          </h2>
          <p>{profile.bio}</p>
          <ul className="chips">
            {profile.focusAreas.map((area) => (
              <li key={area} className="chip chip--accent">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="timeline-card">
          <span className="timeline-icon" aria-hidden="true">
            <FaGraduationCap />
          </span>
          <div>
            <h3>{profile.education.school}</h3>
            <p className="muted">{profile.education.program}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
