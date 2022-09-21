import {useSwiper} from 'swiper/react';
import {TestimonialContainer} from './styles';
import Testimonial from '@/assets/Imagens/testimonial.svg';
import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from 'swiper';

import quotation from '@/assets/Icons/quotation.svg';

const Testemunho = [
  {
    id: 1,
    img: Testimonial,
    nome: 'Cláudio Mendes',
    cargo: 'CEO Casa do adubo',
    depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
  {
    id: 2,
    img: Testimonial,
    nome: 'Breno',
    cargo: 'CEO Casa do adubo',
    depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
  {
    id: 3,
    img: Testimonial,
    nome: 'Roberta',
    cargo: 'CEO Casa do adubo',
    depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
];

export default function testimonial() {
  const swiper = useSwiper();

  return (
    <TestimonialContainer>
      <div className="div-ParterTalkTop">
        <span> DEPOIMENTOS</span>
        <h2>Confira oque nossos parceiros estão falando</h2>
      </div>
      <div className="div-imgPeople">
        <Swiper
          spaceBetween={60}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Testemunho.map((testimonial) => (
            <>
              <SwiperSlide className="swiperSlide">
                <div className="swiperSlideInfo">
                  <img src={testimonial.img} alt={testimonial.nome} />
                  <section>
                    <span>{testimonial.nome}</span>
                    <h4>{testimonial.cargo}</h4>
                  </section>
                </div>
                <div className="swiperSliderDepoiment">
                  <img src={quotation} alt="quotation" />
                  <br></br>
                  <span>{testimonial.depoimento}</span>
                  <section>
                    <div className="swiper-button-prev">
                      <BsArrowLeftCircle size={30} />
                    </div>
                    <div>
                      <button onClick={() => swiper.slideNext()}>teste</button>
                    </div>
                  </section>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </TestimonialContainer>
  );
}
