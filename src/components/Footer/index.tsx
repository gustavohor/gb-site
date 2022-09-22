import {Footer} from './styles';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

import Logo from '../../assets/logo-gb.svg';

export default function Navbar() {
  return (
    <Footer>
      <div className="Footer">
        <div className="div-FooterMenu">
          <ul>
            <li>
              <a href="#aboutUs">Quem somos</a>
            </li>
            <li>
              <a href="#Products">Produtos</a>
            </li>
            <li>
              <a href="#Team">Equipe</a>
            </li>
          </ul>
        </div>
        <div className="div-FooterLogo">
          <img src={Logo} alt="Logo da empresa" />
          <p className="FooterText">
            Greenbelt LTDA. Todos os direitos reservados 2022
          </p>
        </div>
        {/* <div className="div-FooterRS">
          <FaFacebookF className="FooterRSLeft" size={30} color={'#fff'} />
          <FaLinkedinIn className="FooterRSRight" size={30} color={'#fff'} />
        </div> */}
      </div>
    </Footer>
  );
}
