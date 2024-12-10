import HeaderComponent from "../../atoms/HeaderComponent/HeaderComponent";
import Logo from "../../atoms/Logo/Logo";

const Header = () => {
  return (
    <div className="flex items-center px-[80px] py-[65px] justify-between max-1040:p-[24px]">
      <Logo />
      <div className="flex gap-x-[57px] max-1040:gap-x-[24px]">
        <HeaderComponent name="Features" />
        <HeaderComponent name="Team" />
        <HeaderComponent name="Sign in" />
      </div>
    </div>
  );
};

export default Header;
