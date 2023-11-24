import { aboutData, skills } from "../Data";
import Designer from "./Designer";
import Developer from "./Developer";

const About = () => {
  return (
    <section id="about" className="about-section p-8">
      {/* About section */}
      <div className="about-wrapper flex flex-col">
        <div className="section-header mb-2">
          <h3 className="text-2xl text-primary tracking-wider font-body uppercase">
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
                  className="px-4 py-2 w-max rounded-md bg-slate-800 text-slate-400 hover:text-primary hover:shadow-xl transition-colors"
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

      <div className="designer-developer-wrapper flex flex-col gap-8 mt-8">
        {/* Designer container */}
        <Designer />

        {/* Developer container */}
        <Developer />
      </div>
    </section>
  );
};

export default About;
