import Button from '@/@core/components/Button';
import Banner from '@/assets/Imagens/bannerTop.png';
import rectangle from '@/assets/Icons/rectangle.svg';
import {CgArrowLongRight} from 'react-icons/cg';
import {FirstContainer} from './styles';

export default function firstContainer() {
  return (
    <FirstContainer>
      <div className="div-first-conteiner">
        <span className="quality">
          <img src={rectangle} alt="Retangulo" /> Qualidade
        </span>
        <h1 className="title">
          Entregamos produtos com<br></br>
          <b className="bold-title"> experiências autênticas</b>
        </h1>
        <span className="description">
          Desenvolvemos nossos produtos centrados no usuário, buscando sempre
          evoluir e entregar com cada vez mais qualidade.
        </span>
        <Button className="button-first-container">
          Fale Conosco <CgArrowLongRight size={30} className="ArrowRight" />
        </Button>
      </div>
      <div className="div-second-conteiner">
        <img src={Banner} className="ImgCover" alt="Grupo Conversando" />
      </div>
    </FirstContainer>
  );
}
