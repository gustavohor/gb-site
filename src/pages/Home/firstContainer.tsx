import Button from '@/@core/components/Button';
import Banner from '@/assets/Imagens/bannerTop.png';
import {CgArrowLongRight} from 'react-icons/cg';
import {IoMdSquare} from 'react-icons/io';
import {FirstContainer} from './styles';

export default function firstContainer() {
  return (
    <FirstContainer>
      <div style={{maxWidth: '1200px', width: '100%', display: 'flex'}}>
        <div className="div-first-conteiner">
          <span className="quality">
            <IoMdSquare className="rectangle" size={15} /> Qualidade
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
      </div>
    </FirstContainer>
  );
}
