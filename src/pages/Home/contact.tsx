import {ContactContainer} from './styles';
import googleMap from '@/assets/Imagens/googleMap.svg';

export default function team() {
  return (
    <ContactContainer>
      <div className="div-Contacts">
        <span> CONTATO</span>
        <h2>Conta pra gente, como podemos ajudar seu negócio?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum
          arcu sed nec rhoncus. Lorem velit proin suspendisse vestibulum, orci
          orci eleifend. Diam euismod vulputate ac arcu nunc, malesuada libero
          velit. Vel sed sed lobortis in congue. Amet sagittis lacus, auctor
          netus volutpat dictum.
        </p>
        <img
          style={{marginTop: '4rem'}}
          className="googleMap"
          src={googleMap}
          alt="Google Mapa"
        />
      </div>
      <div className="div-ContactForm">
        <h2>Fale conosco</h2>
        <p>
          lorem ipsum amenot dorem velit netus lorem ipsum amenot dorem velit
          netus
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
            rows={10}
            placeholder="Nos conte um pouco mais sobre o que deseja..."
          ></textarea>
          <input type="submit" value="Enviar mensagem" />
        </form>
      </div>
      <img className="googleMapMobile" src={googleMap} alt="Google Mapa" />
    </ContactContainer>
  );
}
