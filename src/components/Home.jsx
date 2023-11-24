import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ResumeDoc from "../assets/Jaysoni_CV.pdf";
import JayImage from "../assets/hero-bg-image.png";
import JayImageCompressed from "../assets/jay-compressed.jpg";

import { homeData } from "../Data";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-12 px-8"
    >
      <div className="text-container max-w-lg">
        <div className="text-header mb-2">
          <h1 className="dark:text-primary text-primary text-5xl font-medium leading-tight">
            {homeData.headerText}
          </h1>
        </div>
        <div className="text-desc">
          <p className="font-normal">{homeData.homeDesc}</p>
        </div>
        <div className="download-resume-button mt-6 mb-4">
          <a
            className="border flex w-max border-primary rounded hover:bg-emerald-600 transition-colors"
            href={ResumeDoc}
            download="Jay Soni Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-slate-600 dark:text-slate-200 hover:text-neutral-50 flex items-center font-medium gap-2 p-2 ">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="img-container border-4 border-slate-400 bg-slate-700 animate-morph hero-image-border-radius overflow-hidden w-64 sm:w-96 h-auto">
        <LazyLoadImage
          src={JayImage}
          PlaceholderSrc={JayImageCompressed}
          effect="blur"
          className=" w-full object-top object-cover h-full z-20"
          alt="Profile photo"
        />
      </div>
    </section>
  );
};

export default Home;
