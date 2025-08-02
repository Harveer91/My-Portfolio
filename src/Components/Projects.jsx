function Projects() {
  const projects = [
    {
      title: 'NFL-Win-Prediction-Model',
      image: '/assets/NFL-logo.png',
      link: 'https://github.com/Harveer91/NFL-Win-Prediction-Model.git',
    },
    {
      title: 'Hockey-Metrics',
      image: '/assets/Hockey-logo.png',
      link: 'https://github.com/Harveer91/Hockey-Metrics.git',
    },
    {
      title: 'AI AGENT',
      image: '/assets/Robot.jpg',
      link: null, //need to add link
    },
  ];

  return (
    <>
    <h1 id="Projects-title">Projects</h1>
    <div className="projects-container">
      {projects.map((project, index) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-box"
          key={index}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
        </a>
      ))}
    </div>
    </>
  );
}

export default Projects;