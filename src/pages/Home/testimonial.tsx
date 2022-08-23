import {useState} from 'react';
import {TestimonialContainer} from './styles';
import Testimonial from '@/assets/Imagens/testimonial.svg';
import quotation from '@/assets/Icons/quotation.svg';
import quotationReverse from '@/assets/Icons/quotationReverse.svg';
import Arrow from '@/assets/Icons/Arrow.svg';

const Testemunho = [
  {
    id: 1,
    img: Testimonial,
    Nome: 'Cláudio Mendes',
    Cargo: 'CEO Casa do adubo',
    Depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
  {
    id: 2,
    img: quotation,
    Nome: 'Breno',
    Cargo: 'CEO Casa do adubo',
    Depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
  {
    id: 3,
    img: quotation,
    Nome: 'Roberta',
    Cargo: 'CEO Casa do adubo',
    Depoimento:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
];

export default function testimonial() {
  const [focusSlide, setFocusSlide] = useState(Testemunho[0]);

  const handleClickPrevious = () => {
    setFocusSlide(
      Testemunho[focusSlide.id - 1]
        ? Testemunho[focusSlide.id - 1]
        : Testemunho[Testemunho.length - 1],
    );
  };

  const handleClickNext = () => {
    setFocusSlide(
      focusSlide.id === Testemunho.length
        ? Testemunho[0]
        : Testemunho[focusSlide.id + 1],
    );
  };

  return (
    <TestimonialContainer>
      <div className="div-ParterTalkTop">
        <span> DEPOIMENTOS</span>
        <h2>Confira oque nossos parceiros estão falando</h2>
      </div>
      <div className="div-imgPeople">
        <div className="div-People">
          <img src={focusSlide.img} alt={focusSlide.Nome} />
          <div className="div-PeopleInfo">
            <>
              <span>{focusSlide.Nome}</span>
              <h4>{focusSlide.Cargo}</h4>
            </>
          </div>
          <div className="mobile">
            <img
              src={Arrow}
              onClick={handleClickPrevious}
              className="ArrowLeft"
              alt={focusSlide.Nome}
            />
            <img
              src={Arrow}
              onClick={handleClickNext}
              className="ArrowRight"
              alt={focusSlide.Nome}
            />
          </div>
        </div>
        <div className="div-testimonial">
          <img className="quotationMarksTop" src={quotation} alt="Aspas" />
          <span>
            {focusSlide.Depoimento}
            <img
              className="quotationMarksBottom"
              src={quotationReverse}
              alt="Aspas Reversas"
            />
          </span>
          <img
            src={Arrow}
            onClick={handleClickPrevious}
            className="ArrowLeft"
            alt={focusSlide.Nome}
          />
          <img
            src={Arrow}
            onClick={handleClickNext}
            className="ArrowRight"
            alt={focusSlide.Nome}
          />
        </div>
      </div>
    </TestimonialContainer>
  );
}
