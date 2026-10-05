import { projects } from '../data/profile';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="page">
      <PageHeader title="Projects" subtitle="A few things I've built recently." />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
