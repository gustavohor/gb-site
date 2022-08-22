import {PartnerInfoContainer} from './styles';
import {CgArrowLongRight} from 'react-icons/cg';
import Star from '@/assets/Icons/star.svg';
import Like from '@/assets/Icons/like.svg';

export default function partnerInfo() {
  return (
    <PartnerInfoContainer>
      <div className="div-info">
        <span>QUEM SOMOS</span>
        <h2>Parceiros para transformar seu negócio em algo mais funcional</h2>
        <span className="div-textMobile">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum
          arcu sed nec rhoncus. Lorem velit proin suspendisse vestibulum, orci
          orci eleifend. Diam euismod vulputate ac arcu nunc, malesuada libero
          velit. Vel sed sed lobortis in congue. Amet sagittis lacus, auctor
          netus volutpat dictum.
        </span>
        <div className="IconsAdvantage">
          <div className="Star">
            <img src={Star} alt="Estrelas" />
            <span>
              Qualidade nas entregas <br></br>
              <b>Produtos detalhistas</b>
            </span>
          </div>
          <div className="Like">
            <img src={Like} alt="Estrelas" />
            <span>
              Satisfação dos clientes <br></br>
              <b>98%</b>
            </span>
          </div>
        </div>
      </div>
      <div className="div-text">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum
          arcu sed nec rhoncus. Lorem velit proin suspendisse vestibulum, orci
          orci eleifend. Diam euismod vulputate ac arcu nunc, malesuada libero
          velit. Vel sed sed lobortis in congue. Amet sagittis lacus, auctor
          netus volutpat dictum.
        </span>

        <h3>
          Fale Conosco{' '}
          <CgArrowLongRight style={{marginLeft: '1rem'}} size={30} />
        </h3>
      </div>
    </PartnerInfoContainer>
  );
}
