function ProjectCard({ title, description, tags, link }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="tags">
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>

      <a href={link} target="_blank" rel="noopener noreferrer">
        ნახე პროექტი
      </a>
    </article>
  );
}

export default ProjectCard;

