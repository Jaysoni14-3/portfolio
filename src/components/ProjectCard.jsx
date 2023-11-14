const ProjectCard = ({ project }) => {
  return (
    <article
      key={project.id}
      className="group/project-card project-card flex flex-col sm:flex-row bg-slate-950 hover:bg-slate-800  gap-10 rounded-xl p-6 transition-colors ease-linear hover:shadow-lg"
    >
      <figure className="project-image-container sm:w-[70%] rounded-md overflow-hidden ">
        <a href={project.url} target="_blank" rel="noreferrer">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project-image w-full h-auto object-cover"
          />
        </a>
      </figure>
      <div className="project-details  sm:w-[30%]">
        <h3 className="project-name group-hover/project-card:text-primary tracking-wide text-lg font-medium leading-snug transition-colors ease-linear">
          {project.name}
        </h3>
        <p className="project-description text-base mt-4">
          {project.description}
        </p>
        <div className="project-tools flex flex-wrap gap-2 mt-4">
          {project.tools.map((tool, index) => (
            <p
              key={index}
              className="text-slate-100 text-base whitespace-nowrap shadow-sm shadow-slate-950 rounded-sm px-2"
            >
              {tool}
            </p>
          ))}
        </div>
        <div className="buttons flex items-center justify-between mt-8">
          {project.buttons.map((button) => (
            <a
              key={button.id}
              href={button.href}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <span className="whitespace-nowrap">{button.name}</span>
              {button.icon}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
