import { LuExternalLink, LuGithub } from "react-icons/lu";

import shreejiMumbaiImage from "../assets/project-shreeji.png";
import aanimeHubImage from "../assets/project-aanime-hub.png";
import themoviedbwebImage from "../assets/project-themoviedb.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Shreeji Mumbai",
      url: "https://shreejimumbai.com",
      image: shreejiMumbaiImage,
      imageAlt: "Shreeji mumbai website image",
      description:
        "Conceptualized and created a modern and user-friendly website for Shreeji Mumbai, showcasing their swimming pool design and maintenance services.",
      tools: ["React", "Tailwind css", "Firebase", "Figma"],
      buttons: [
        {
          id: 1,
          href: "https://github.com/Jaysoni14-3/animeHub",
          name: "Code",
          icon: <LuGithub size={24} strokeWidth={1} />,
        },
        {
          id: 2,
          href: "https://shreejimumbai.com",
          name: "Visit website",
          icon: <LuExternalLink size={24} strokeWidth={1} />,
        },
      ],
    },
    {
      id: 2,
      name: "Aanime Hub",
      url: "https://aanime-hub.netlify.app/",
      image: aanimeHubImage,
      imageAlt: "Anime hub website image",
      description:
        "Designed and developed the AnimeHub website to provide a seamless and engaging experience for anime enthusiasts",
      tools: ["React", "Tailwind css", "Api integration", "Figma"],
      buttons: [
        {
          id: 1,
          href: "https://github.com/Jaysoni14-3/shreeji",
          name: "Code",
          icon: <LuGithub size={24} strokeWidth={1} />,
        },
        {
          id: 2,
          href: "https://aanime-hub.netlify.app/",
          name: "Visit website",
          icon: <LuExternalLink size={24} strokeWidth={1} />,
        },
      ],
    },
    {
      id: 3,
      name: "The MovieDb web",
      url: "https://themoviedbweb.netlify.app/home.html",
      image: themoviedbwebImage,
      imageAlt: "Movie DB website image",
      description:
        "Designed and developed the moviedbweb website to provide an immersive and informative experience for movie enthusiasts.",
      tools: ["HTML", "Bootstrap", "Jquery", "Api integration", "Figma"],
      buttons: [
        {
          id: 1,
          href: "https://github.com/Jaysoni14-3/themoviedb",
          name: "Code",
          icon: <LuGithub size={24} strokeWidth={1} />,
        },
        {
          id: 2,
          href: "https://themoviedbweb.netlify.app/home.html",
          name: "Visit website",
          icon: <LuExternalLink size={24} strokeWidth={1} />,
        },
      ],
    },
  ];
  return (
    <section id="projects" className="projects-section p-8">
      <div className="section-header mb-4">
        <h2 className="text-2xl text-primary tracking-wider font-body uppercase">Projects</h2>
      </div>
      <div className="section-body grid gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
