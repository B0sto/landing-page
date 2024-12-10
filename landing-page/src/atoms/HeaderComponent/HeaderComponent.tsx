interface HeaderProps {
  name: string;
}



const HeaderComponent: React.FC<HeaderProps> = ({name}) => {
  return (
    <div className="text-[#07043B] font-raleway max-1040:text-[12px]">{name}</div>
  )
}

export default HeaderComponent