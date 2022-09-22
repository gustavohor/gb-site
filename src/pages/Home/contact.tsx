import {ContactContainer} from './styles';
import googleMap from '@/assets/Imagens/googleMap.svg';

export default function team() {
  return (
    <ContactContainer>
      <div id="Contact" className="contactContainer">
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
          <iframe
            className="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.3522379343137!2d-40.37648162241383!3d-20.33446162869784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83c1c14868acb%3A0x50a431a89f543bcc!2sCasa%20do%20Adubo%20-%20Cariacica!5e0!3m2!1spt-BR!2sbr!4v1663819244028!5m2!1spt-BR!2sbr"
            width="500"
            height="300"
            loading="lazy"
          ></iframe>
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
        <iframe
          className="googleMapMobile"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.3522379343137!2d-40.37648162241383!3d-20.33446162869784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83c1c14868acb%3A0x50a431a89f543bcc!2sCasa%20do%20Adubo%20-%20Cariacica!5e0!3m2!1spt-BR!2sbr!4v1663819244028!5m2!1spt-BR!2sbr"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </div>
    </ContactContainer>
  );
}
