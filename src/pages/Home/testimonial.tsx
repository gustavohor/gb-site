import {useRef, useState, useEffect, useCallback} from 'react';
import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import quotation from '@/assets/Icons/quotation.svg';
import Testimonial from '@/assets/Imagens/testimonial.svg';
import {TestimonialContainer} from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const People = [
  {
    id: 1,
    img: Testimonial,
    nome: 'Cláudio Mendes',
    cargo: 'CEO Casa do adubo',
    depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nulla elementum amet donec posuere vitae orci. Tortor arcu amet accumsan risus hendrerit vestibulum quisque aenean. Sed habitant quam feugiat netus etiam. ',
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
  const [currentIndex, updateCurrentIndex] = useState(0);
  const swiperRef = useRef() as any;

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    [],
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);

  return (
    <TestimonialContainer>
      <div className="Testimonial">
        <div className="div-ParterTalkTop">
          <span> DEPOIMENTOS</span>
          <h2>Confira o que nossos parceiros estão falando</h2>
        </div>
        <div>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper.el;
            }}
            spaceBetween={60}
            centeredSlides={true}
            className="mySwiper swiper-container"
          >
            {People.map((Peoples) => (
              <SwiperSlide key={Peoples.id}>
                <div className="swiperSlideInfo">
                  <img src={Peoples.img} alt={Peoples.nome} />
                  <section>
                    <span>{Peoples.nome}</span>
                    <h4>{Peoples.cargo}</h4>
                  </section>
                </div>
                <div className="swiperSliderDepoiment">
                  <img src={quotation} alt="quotation" />
                  <br></br>
                  <span>{Peoples.depoimento}</span>
                </div>
              </SwiperSlide>
            ))}

            <div className="div-Button" style={{cursor: 'pointer'}}>
              <button
                className="buttonPrev"
                onClick={() => goPrev()}
                style={
                  currentIndex === 0
                    ? {color: 'gray', cursor: 'not-allowed'}
                    : {cursor: 'pointer'}
                }
              >
                <BsArrowLeftCircle size={32} />
              </button>
              <button
                onClick={() => goNext()}
                className="buttonNext"
                style={
                  currentIndex === People.length - 1
                    ? {color: 'gray', cursor: 'not-allowed'}
                    : {cursor: 'pointer'}
                }
              >
                <BsArrowRightCircle size={32} />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </TestimonialContainer>
  );
}
