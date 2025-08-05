import '../App.css';
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image || "https://via.placeholder.com/400x250"} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} className="btn" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              View Dashboard
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;