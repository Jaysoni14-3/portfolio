import designImage from "../assets/design-image.svg";

import { designerData } from "../Data";

const Designer = () => {
  return (
    <div className="designer-container flex flex-col-reverse md:flex-row md:items-center w-full">
      <div className="text-container md:w-1/2 py-3 rounded-lg">
        <h3 className="text-xl mb-2">Designer</h3>
        <p className="text-base">{designerData.designerParagraph}</p>
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
  );
};

export default Designer;
