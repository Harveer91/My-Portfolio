import { skillGroups } from '../data/profile';
import PageHeader from '../components/PageHeader';

function Skills() {
  return (
    <div className="page">
      <PageHeader title="Skills" subtitle="Languages and tools I use to build things." />
      {skillGroups.map((group) => (
        <section key={group.title} className="section">
          <h2 className="section-title">{group.title}</h2>
          <ul className="skill-grid">
            {group.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <li key={skill.name} className="skill-card">
                  <Icon className="skill-icon" aria-hidden="true" />
                  <span>{skill.name}</span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default Skills;
