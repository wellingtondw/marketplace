import Logo from '../../assets/logo.png'
import WhiteLogo from '../../assets/logo-white.png'

type HeaderProps = {
  secondary?: boolean
}

export const Header = ({ secondary }: HeaderProps) => {
  return (
    <div className="col-12 text-center py-4 px-4">
      <img src={secondary ? WhiteLogo : Logo } alt="Pet food" />
    </div>
  )
}