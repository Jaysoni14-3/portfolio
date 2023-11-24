import { LuGithub, LuLinkedin } from "react-icons/lu";
import JayImage from "../assets/hero-bg-image.png";

import { homeData } from "../Data";

const Home = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/jay-soni-61462a227/",
      name: "linkdin",
      icon: <LuLinkedin size={24} strokeWidth={1.5} />,
    },
    {
      href: "https://github.com/Jaysoni14-3",
      name: "github",
      icon: <LuGithub size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="home"
      className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-12 px-8"
    >
      <div className="text-container max-w-lg">
        <div className="text-header mb-2">
          <h1 className="text-primary text-5xl font-medium leading-tight">
            {homeData.headerText}
          </h1>
        </div>
        <div className="text-desc">
          <p className="font-normal">{homeData.homeDesc}</p>
        </div>
        <div className="socials flex gap-8 mt-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 p-2 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="img-container border-4 border-slate-400 bg-slate-700 animate-morph hero-image-border-radius overflow-hidden w-64 sm:w-96 h-auto">
        <img
          className=" w-full object-top object-cover h-full z-20"
          src={JayImage}
          alt="Profile photo"
        />
      </div>
    </section>
  );
};

export default Home;
