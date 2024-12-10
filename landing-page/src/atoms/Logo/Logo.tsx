import HeaderLogo from '../../assets/Logo.svg'

const Logo = () => {
  return (
    <div>
        <img src={HeaderLogo} alt="Header Logo" className='max-1040:w-[80px] h-[24px]'/>
    </div>
  )
}

export default Logo