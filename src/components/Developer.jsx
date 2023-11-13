import developerImage from "../assets/developer-image.svg";

import { developerData } from "../Data";

const Developer = () => {
  return (
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
        <p className="text-base ">{developerData.developerParagraph}</p>
      </div>
    </div>
  );
};

export default Developer;
