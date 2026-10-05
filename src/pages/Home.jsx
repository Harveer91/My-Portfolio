import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaCircleInfo, FaFileLines, FaPlay } from 'react-icons/fa6';
import { destinations, profile, projects, skillGroups, viewers } from '../data/profile';
import { useViewer } from '../viewerContext';
import Row from '../components/Row';

function DestinationTile({ item }) {
  const Icon = item.icon;
  const content = (
    <>
      <Icon className="tile-icon" aria-hidden="true" />
      <span className="tile-label">{item.label}</span>
    </>
  );
  const props = { className: 'tile', style: { background: item.gradient } };

  return item.href ? (
    <a {...props} href={item.href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link {...props} to={item.to}>
      {content}
    </Link>
  );
}

function Home() {
  const { viewerId } = useParams();
  const { setViewerId } = useViewer();
  const viewer = viewers.find((v) => v.id === viewerId);

  useEffect(() => {
    if (viewer) setViewerId(viewer.id);
  }, [viewer, setViewerId]);

  if (!viewer) return <Navigate to="/browse" replace />;

  const skills = skillGroups.flatMap((group) => group.skills);

  return (
    <>
      <section className="hero">
        <div className="hero-media" style={{ backgroundImage: `url(${profile.photo})` }} aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="hero-kicker-mark">H</span> Portfolio
          </p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-meta">
            <span>{profile.title}</span>
            <span aria-hidden="true">•</span>
            <span>
              {profile.education.program} @ {profile.education.school}
            </span>
          </p>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn--primary">
              <FaPlay /> View Projects
            </Link>
            {profile.links.resume ? (
              <a href={profile.links.resume} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
                <FaFileLines /> Resume
              </a>
            ) : (
              <Link to="/about" className="btn btn--secondary">
                <FaCircleInfo /> More Info
              </Link>
            )}
          </div>
        </div>
      </section>

      <div className="rows">
        <Row title={`Top picks for ${viewer.name}`}>
          {viewer.picks.map((key) => (
            <DestinationTile key={key} item={destinations[key]} />
          ))}
        </Row>

        <Row title="Featured Projects">
          {projects.map((project) => (
            <Link key={project.id} to="/projects" className="tile tile--project">
              <img src={project.image} alt="" loading="lazy" />
              <span className="tile-overlay">
                <span className="tile-label">{project.title}</span>
                <span className="tile-sub">{project.tags.join(' • ')}</span>
              </span>
            </Link>
          ))}
        </Row>

        <Row title="Tech Stack">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Link key={skill.name} to="/skills" className="tile tile--skill">
                <Icon className="tile-icon" aria-hidden="true" />
                <span className="tile-label">{skill.name}</span>
              </Link>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Home;
