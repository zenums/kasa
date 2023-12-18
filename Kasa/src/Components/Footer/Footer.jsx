import './Footer.css';
import LogoWhite from '../../assets/logo-footer.png';

function Footer() {
  return (
    <footer>
        <img src={LogoWhite} alt="logo kasa white" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer