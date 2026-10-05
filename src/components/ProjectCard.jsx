import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        <img src={project.image} alt="" loading="lazy" />
        {!project.link && <span className="badge">In progress</span>}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="chips">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
        {project.link ? (
          <a className="btn btn--ghost btn--sm" href={project.link} target="_blank" rel="noopener noreferrer">
            <FaGithub /> View code <FaArrowUpRightFromSquare className="btn-trailing" />
          </a>
        ) : (
          <span className="btn btn--ghost btn--sm btn--disabled" aria-disabled="true">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
