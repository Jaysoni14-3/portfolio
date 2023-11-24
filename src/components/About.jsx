import { aboutData, skillsData } from "../Data";
import Designer from "./Designer";
import Developer from "./Developer";
import Skills from "./Skills";

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
        <div className="section-body flex flex-col justify-between w-full gap-8 md:gap-4 md:flex-row">
          <div className="about-text-container max-w-sm md:w-1/2">
            <h2 className="text-xl mb-4">{aboutData.header}</h2>
            <p className="text-base leading-6">{aboutData.aboutParagraph}</p>
          </div>
          <div className="skills-wrapper relative md:w-1/2">
            <Skills skillsData={skillsData} />
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
