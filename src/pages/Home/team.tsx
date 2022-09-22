import {TeamContainer} from './styles';
import {AiFillCheckCircle} from 'react-icons/ai';
import Mapa from '@/assets/Imagens/mapTeam.svg';

export default function team() {
  return (
    <TeamContainer>
      <div id="Team" className="Team">
        <div className="div-teamInfo">
          <span className="team">A EQUIPE</span>
          <h2>Um time de especialistas focados na missão</h2>
          <span className="check">
            <AiFillCheckCircle
              style={{marginRight: '1.1rem'}}
              size={30}
              color={'#3CFCA0'}
            />
            Desenvolvimento front-end
          </span>
          <span className="check">
            <AiFillCheckCircle
              style={{marginRight: '1.1rem'}}
              size={30}
              color={'#3CFCA0'}
            />
            Desenvolvimento back-end
          </span>
          <span className="check">
            <AiFillCheckCircle
              style={{marginRight: '1.1rem'}}
              size={30}
              color={'#3CFCA0'}
            />
            Análise da experiência do usuário
          </span>
          <span className="check">
            <AiFillCheckCircle
              style={{marginRight: '1.1rem'}}
              size={30}
              color={'#3CFCA0'}
            />
            Comercial
          </span>
        </div>
        <div className="div-teamMap">
          <img src={Mapa} alt="mapa de especialistas" />
        </div>
      </div>
    </TeamContainer>
  );
}
