import {Footer} from './styles';
import {FaLinkedinIn} from 'react-icons/fa';
import {Link} from 'react-scroll';
import {useDisclosure} from 'react-use-disclosure';
import {ModalForm} from '@/components/Modal/form';
import Logo from '../../assets/logo-gb.svg';

export default function Navbar() {
  const {
    isOpen: isOpenForm,
    toggle: toggleForm,
    close: closeModalForm,
  } = useDisclosure();
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
            <span className="work" onClick={toggleForm}>
              Trabalhe conosco
            </span>
          </ul>
        </div>
        <div className="div-FooterLogo">
          <img src={Logo} alt="Logo da empresa" />
        </div>
        <div className="div-FooterRS">
          <a
            href="https://www.linkedin.com/company/green-belti-tecnologia/"
            target="_blank"
          >
            <FaLinkedinIn className="FooterRSRight" size={30} color={'#fff'} />
          </a>
        </div>
      </div>
      <div>
        <p className="FooterText">
          Green Belt LTDA. Todos os direitos reservados 2014
        </p>
      </div>
      <ModalForm isOpen={isOpenForm} toggle={closeModalForm} />
    </Footer>
  );
}
