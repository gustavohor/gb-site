import {useState} from 'react';
import {CgArrowLongRight} from 'react-icons/cg';
import Logo from '../../assets/logo-gb.svg';
import {Container} from './styles';
import Menu from '@/assets/Icons/Menu.svg';
import {HiOutlineX} from 'react-icons/hi';
import {Link} from 'react-scroll';
import {useDisclosure} from 'react-use-disclosure';
import {ModalForm} from '@/components/Modal/form';

export default function Navbar() {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const {
    isOpen: isOpenForm,
    toggle: toggleForm,
    close: closeModalForm,
  } = useDisclosure();
  return (
    <Container>
      <nav className="navbar">
        <div className="nav-logo-menu">
          {' '}
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menuMobile">
          <img
            src={Menu}
            onClick={() => setisOpenMenu(!isOpenMenu)}
            alt="Menu"
          />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <Link
                className="navMenu"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={0}
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
                offset={-30}
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
                offset={-100}
                duration={500}
              >
                Equipe
              </Link>
            </li>
            <span className="navMenu" onClick={toggleForm}>
              Trabalhe conosco
            </span>
            <li>
              <Link
                className="contact"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Fale conosco <CgArrowLongRight className="icon" size={25} />
              </Link>
            </li>
          </ul>
        </div>
        {isOpenMenu && (
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
                    onClick={() => setisOpenMenu(!isOpenMenu)}
                  />
                </div>
              </div>
              <ul>
                <li>
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    to="Team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Equipe
                  </Link>
                </li>
                <span className="work" onClick={toggleForm}>
                  Trabalhe conosco
                </span>
                <li>
                  <Link
                    className="contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setisOpenMenu(false)}
                  >
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
      <ModalForm isOpen={isOpenForm} toggle={closeModalForm} />
    </Container>
  );
}
