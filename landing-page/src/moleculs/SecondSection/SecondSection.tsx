import ArrowIcon from "../../atoms/ArrowIcon/ArrowIcon";
import Avatar from "../../atoms/Avatar/Avatar";
import Section2Image from "../../atoms/Section2Image/Section2Image";

const SecondSection = () => {
  return (
    <div className="bg-[#F8F8FE] px-[80px] py-[107px] flex justify-between">
      <div>
        <h1 className="text-[#07043B] font-raleway text-[40px] font-bold">
          Stay productive, wherever you are
        </h1>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
        <div>
            <p>See how Fylo works</p>
            <ArrowIcon/>
        </div>
        <div>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div>
                <Avatar/>
                <p>Kyle Burton</p>
                <p>Founder & CEO, Huddle</p>
            </div>
        </div>
      </div>

      <div>
        <Section2Image/>
      </div>
    </div>
  );
};

export default SecondSection;
