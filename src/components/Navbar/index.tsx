import {useState} from 'react';
import {CgArrowLongRight} from 'react-icons/cg';
import Logo from '../../assets/logo-gb.svg';
import {Container} from './styles';
import Menu from '@/assets/Icons/Menu.svg';
import {HiOutlineX} from 'react-icons/hi';

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
              <a href="#aboutUs">Quem Somos</a>
            </li>
            <li>
              <a href="#Products">Produtos</a>
            </li>
            <li>
              <a href="#Team">Equipe</a>
            </li>
            <li>
              <a className="contact" href="#Contact">
                Fale conosco <CgArrowLongRight className="icon" size={25} />
              </a>
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
                  <a href="#aboutUs">Quem Somos</a>
                </li>
                <li>
                  <a href="#Products">Produtos</a>
                </li>
                <li>
                  <a href="#Team">Equipe</a>
                </li>
                <li>
                  <a className="contact" href="#Contact">
                    Fale conosco
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </Container>
  );
}
