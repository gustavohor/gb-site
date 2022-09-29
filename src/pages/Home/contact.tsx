import {ContactContainer} from './styles';
import {FiMail, FiPhone, FiClock, FiMapPin} from 'react-icons/fi';

export default function team() {
  return (
    <ContactContainer>
      <div id="Contact" className="contactContainer">
        <div className="div-Contacts">
          <span>FALE CONOSCO</span>
          <h2>Conta pra gente, como podemos ajudar seu negócio?</h2>
          <div>
            <p>
              <a
                href="mailto:contato@greenbelt.com"
                style={{maxWidth: '256px'}}
              >
                <FiMail
                  size={30}
                  style={{color: '#fff', marginRight: '1rem '}}
                />{' '}
                contato@greenbelt.com
              </a>
            </p>
            <p>
              <a href="tel:(27)99928-2654" style={{maxWidth: '256px'}}>
                <FiPhone
                  size={30}
                  style={{color: '#fff', marginRight: '1rem '}}
                />{' '}
                (27) 99928-2654
              </a>
            </p>
            <p style={{maxWidth: '260px'}}>
              <FiClock size={40} style={{color: '#fff', marginRight: '1rem'}} />{' '}
              Seg a Sex de 08h as 18h / sab de 08h as 12h
            </p>
            <p style={{maxWidth: '360px'}}>
              <FiMapPin
                size={40}
                style={{color: '#fff', marginRight: '1rem'}}
              />{' '}
              R. Antonio Leandro Da Silva, 60 - Alto Lage 29151-035, Cariacica -
              ES
            </p>
          </div>
          <br />
          <iframe
            className="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.178343439605!2d-40.37688860000001!3d-20.3342498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83c1c74d12739%3A0xbaf20461bcb818d2!2sR.%20Antonio%20Leandro%20Da%20Silva%2C%2060%20-%20Alto%20Lage%2C%20Cariacica%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1663887934289!5m2!1spt-BR!2sbr"
            width="500"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
        <div className="div-ContactForm">
          <h2>Fale conosco</h2>
          <p>
            Precisando de uma equipe para um novo projeto? Nos conte um pouco
            mais...
          </p>
          <form action="onSubmit">
            <label htmlFor="name">Seu nome*</label>
            <input type="text" placeholder="Insira seu nome aqui..." />
            <label htmlFor="email">E-mail*</label>
            <input type="email" placeholder="Seu email favorito" />
            <label htmlFor="Mensagem">Mensagem</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={13}
              placeholder="Nos conte um pouco mais sobre o que deseja..."
            ></textarea>
            <input type="submit" value="Enviar mensagem" />
          </form>
        </div>
      </div>
    </ContactContainer>
  );
}
