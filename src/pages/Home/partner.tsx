import {PartnerContainer} from './styles';
import CasadoAdubo from '@/assets/Parthers/CasaDoAdubo.svg';
import AgroCasal from '@/assets/Parthers/AgroCasal.svg';
import ArrownDown from '@/assets/Icons/Arrow-down.svg';

export default function partner() {
  return (
    <PartnerContainer>
      <div className="Partner">
        <div className="div-partner-text">
          <span>Junte-se aos parceiros que já confiam na gente</span>
          <div className="ArrowDown">
            <img src={ArrownDown} alt="seta para baixo" />
          </div>
        </div>
        <div className="div-partners">
          <img
            src={AgroCasal}
            className="logoCasal"
            alt="Agrodistribuidor casal"
          />
          <img
            src={CasadoAdubo}
            className="logoCasadoAdubo"
            alt=" Casa do Adubo"
          />
        </div>
      </div>
    </PartnerContainer>
  );
}
