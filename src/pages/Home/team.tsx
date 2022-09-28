import {TeamContainer} from './styles';
import Mapa from '@/assets/Imagens/mapTeam.png';
import {aboutUsList} from '@/utils/mock';
import checked from '@/assets/Icons/check.svg';

export default function team() {
  return (
    <TeamContainer>
      <div id="Team" className="Team">
        <div className="div-teamInfo">
          <span className="team">A EQUIPE</span>
          <h2>Um time de especialistas focados na missão</h2>
          {aboutUsList.map((list) => (
            <span className="check">
              <img
                src={checked}
                alt="checked"
                style={{
                  marginRight: '1.1rem',
                }}
              />

              {list.text}
            </span>
          ))}
        </div>
        <div className="div-teamMap">
          <img src={Mapa} alt="mapa de especialistas" />
        </div>
      </div>
    </TeamContainer>
  );
}
