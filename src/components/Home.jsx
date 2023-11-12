import JayImage from "../assets/Jay-image.jpeg";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const Home = () => {
  const homeData = {
    headerText: "Front-End React Developer",
    homeDesc:
      "Hi, I'm Jay Soni. A passionate Front-end React Developer based in Mumbai, India.",
  };

  const socialLinks = [
    {
      href: "#",
      name: "linkdin",
      icon: <LuLinkedin size={24} strokeWidth={1.5} />,
    },
    {
      href: "#",
      name: "github",
      icon: <LuGithub size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="home"
      className="flex flex-col-reverse sm:flex-row items-center justify-between my-8 px-8"
    >
      <div className="text-container max-w-lg">
        <div className="text-header mb-2">
          <h1 className="text-emerald-300  text-5xl font-medium leading-tight">
            {homeData.headerText}
          </h1>
        </div>
        <div className="text-desc ">
          <p className="font-normal">{homeData.homeDesc}</p>
        </div>
        <div className="socials flex gap-8 mt-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-slate-400 p-2 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="img-container border-4 border-emerald-700 animate-morph hero-image-border-radius overflow-hidden w-full max-w-96 sm:w-96 h-96">
        <img
          className=" w-full object-center object-cover h-full z-20"
          src={JayImage}
          alt="Profile photo"
        />
      </div>
    </section>
  );
};

export default Home;
