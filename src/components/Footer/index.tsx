import {Footer} from './styles';
import {FaLinkedinIn} from 'react-icons/fa';
import {Link} from 'react-scroll';

import Logo from '../../assets/logo-gb.svg';

export default function Navbar() {
  return (
    <Footer>
      <div className="Footer">
        <div className="div-FooterMenu">
          <ul>
            <li>
              <Link
                className="navMenu"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                className="navMenu"
                to="Products"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                className="navMenu"
                to="Team"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Equipe
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-FooterLogo">
          <img src={Logo} alt="Logo da empresa" />
        </div>
        <div className="div-FooterRS">
          <FaLinkedinIn className="FooterRSRight" size={30} color={'#fff'} />
        </div>
      </div>
      <div>
        <p className="FooterText">
          Greenbelt LTDA. Todos os direitos reservados 2022
        </p>
      </div>
    </Footer>
  );
}
