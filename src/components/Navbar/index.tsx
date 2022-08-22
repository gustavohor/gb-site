import {CgArrowLongRight} from 'react-icons/cg';
import Logo from '../../assets/logo-gb.svg';
import {Container} from './styles';

export default function Navbar() {
  return (
    <Container>
      <nav className="navbar">
        <div className="nav-logo-menu">
          {' '}
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Equipe</a>
            </li>
            <li>
              <a className="contact" href="#">
                Fale conosco <CgArrowLongRight className="icon" size={25} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}
