import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="cards">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectList;