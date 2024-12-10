import InputButton from "../../atoms/InputButton/InputButton";
import SectionHeader from "../../atoms/SectionHeader/SectionHeader";
import SectionImage from "../../atoms/SectionImage/SectionImage";
import { SectionText } from "../../atoms/SectionText/SectionText";

const FirstSection = () => {
  return (
    <div className="flex pt-[101px] px-[80px] pb-[164px] items-center justify-between max-1040:flex-col max-1040:text-center">
      <div className="flex flex-col gap-y-[25px] max-1040:order-2 max-1040:gap-y-[20px]">
        <SectionHeader />
        <SectionText />
        <InputButton />
      </div>
      <div>
        <SectionImage />
      </div>
    </div>
  );
};

export default FirstSection;
