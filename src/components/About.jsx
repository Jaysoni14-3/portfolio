import designImage from "../assets/design-image.svg";
import developerImage from "../assets/developer-image.svg";

const About = () => {
  const aboutData = {
    header:
      "Front-end developer with a passion for building user-friendly websites.",
    aboutParagraph:
      "My journey into web development began with a fascination for turning ideas into interactive and visually appealing websites. I cultivated a strong foundation in HTML, CSS, and JavaScript. I am constantly seeking opportunities to learn and apply emerging technologies to create intuitive and engaging user interfaces.",
    designerParagraph:
      "Hey there! I'm not the designer tweaking tiny details on an Illustrator artboard, but I love design. You'll often find me working with Figma, adjusting font sizes, working with different colors that works together, and thinking about layouts. I'm dedicated to creating smooth user experiences while keeping the user interface clean and minimal.",
    developerParagraph:
      "A front-end developer excited about diving into the ever-evolving realm of web development. I've got a solid grip on HTML, CSS, and JavaScript, and I'm ready to bring my skills and creativity to exciting and groundbreaking projects. I'm passionate about creating engaging websites that not only look good but also offer seamless user experiences.",
  };

  const skills = [
    { name: "React" },
    { name: "Redux" },
    { name: "JavaScript" },
    { name: "jQuery" },
    { name: "HTML" },
    { name: "Css" },
    { name: "Responsive design" },
    { name: "Tailwind css" },
    { name: "Bootstrap" },
    { name: "Figma" },
    { name: "UI design" },
    { name: "Firebase" },
    { name: "Github" },
    { name: "Vs Code" },
    { name: "Dev Tools" },
  ];

  return (
    <section id="about" className="about-section mt-12 p-8">
      {/* About section */}
      <div className="about-wrapper flex flex-col">
        <div className="section-header mb-2">
          <h3 className="text-base text-emerald-300 tracking-wider font-body uppercase">
            About me
          </h3>
        </div>
        <div className="section-body flex flex-col gap-8 md:gap-0 md:flex-row">
          <div className="about-text-container md:w-1/2">
            <h2 className="text-xl mb-4">{aboutData.header}</h2>
            <p className="text-base leading-6">{aboutData.aboutParagraph}</p>
          </div>
          <div className="skills-wrapper md:px-6 relative md:w-1/2">
            <h3 className="text-xl mb-4 text-slate-300 ">
              Skills and technologies
            </h3>
            <div className="skills-container mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 w-max rounded-md bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <span className="text-base whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="designer-developer-wrapper flex flex-col gap-8 mt-12">
        {/* Designer container */}
        <div className="designer-container flex flex-col-reverse md:flex-row md:items-center w-full">
          <div className="text-container md:w-1/2 py-3 rounded-lg">
            <h3 className="text-xl mb-2 text-slate-300">Designer</h3>
            <p className="text-base ">{aboutData.designerParagraph}</p>
          </div>
          <div className="md:w-1/2 image-container flex items-center justify-center">
            <figure className="w-72 h-auto">
              <img
                src={designImage}
                className="w-full"
                alt="an illustration of design"
              />
            </figure>
          </div>
        </div>

        {/* Developer container */}
        <div className="developer-container flex flex-col md:flex-row md:items-center w-full">
          <div className="md:w-1/2 image-container flex items-center justify-center">
            <figure className="w-72 h-auto">
              <img
                src={developerImage}
                className="w-full h-full"
                alt="an illustration of hands that are typing on a laptop"
              />
            </figure>
          </div>
          <div className="text-container md:w-1/2 py-3 rounded-lg">
            <h3 className="text-xl mb-2 text-slate-300">Developer</h3>
            <p className="text-base ">{aboutData.developerParagraph}</p>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default About;
