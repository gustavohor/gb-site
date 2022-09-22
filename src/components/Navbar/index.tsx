import {useState} from 'react';
import {CgArrowLongRight} from 'react-icons/cg';
import Logo from '../../assets/logo-gb.svg';
import {Container} from './styles';
import Menu from '@/assets/Icons/Menu.svg';
import {HiOutlineX} from 'react-icons/hi';
import {Link} from 'react-scroll';

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Container>
      <nav className="navbar">
        <div className="nav-logo-menu">
          {' '}
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menuMobile">
          <img src={Menu} onClick={() => setisOpen(!isOpen)} alt="Menu" />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <Link
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
                to="Team"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Equipe
              </Link>
            </li>
            <li>
              <Link
                className="contact"
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Fale conosco <CgArrowLongRight className="icon" size={25} />
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <>
            <div className="Mobile">
              <div className="MobileHeader">
                <div>
                  <span>MENU</span>
                </div>
                <div>
                  <HiOutlineX
                    size={35}
                    className="mobileCross"
                    onClick={() => setisOpen(!isOpen)}
                  />
                </div>
              </div>
              <ul>
                <li>
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setisOpen(false)}
                  >
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setisOpen(false)}
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setisOpen(false)}
                  >
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link
                    className="contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setisOpen(false)}
                  >
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </Container>
  );
}
