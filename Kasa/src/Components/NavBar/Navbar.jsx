import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logo_Kasa.png';
import './NavBar.css'

function Navbar() {
  return (
    <nav className='NavBar'>
      <img src={Logo} alt="logo kasa" className='logo'/>
      <div className="lien">
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/a-propos'>A Propos</NavLink>
      </div>
    </nav>
  )
}
export default Navbar