import {useState} from 'react';
import {Products} from './styles';
import screen from '@/assets/Imagens/screen.svg';
import info from '@/assets/Icons/info.svg';
import Accordion from '@/@core/components/Accordion';

const Sliders = [
  {
    id: '01',
    Title: 'GB ERP',
    subTitle: 'Tenha o controle de todo o seu negócio em um só lugar',
    img: screen,
    imgDescrition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus, consectetur adipiscing elit. Non ipsum arcu sed nec rhoncus.',
  },
  {
    id: '02',
    Title: 'GB teste',
    subTitle: 'Tenha o controle de todo o seu negócio em um só lugar',
    img: screen,
    imgDescrition: 'Tela do ERP',
  },
  {
    id: '03',
    Title: 'GB teste',
    subTitle: 'Tenha o controle de todo o seu negócio em um só lugar',
    img: screen,
    imgDescrition: 'Tela do ERP',
  },
  {
    id: '04',
    Title: 'GB teste',
    subTitle: 'Tenha o controle de todo o seu negócio em um só lugar',
    img: screen,
    imgDescrition: 'Tela do ERP',
  },
  {
    id: '05',
    Title: 'GB teste',
    subTitle: 'Tenha o controle de todo o seu negócio em um só lugar',
    img: screen,
    imgDescrition: 'Tela do ERP',
  },
];

export default function products() {
  const [focusSlide, setFocusSlide] = useState(Sliders[0]);
  const isOpen = false;
  return (
    <Products>
      <span> NOSSOS PRODUTOS</span>
      <h2 className="productH2">Alguns de nossos sistemas e produtos</h2>
      <div className="productTop">
        <ul className="productList">
          {Sliders.map((slider) => (
            <li
              className="productText"
              key={slider.id}
              onClick={() => setFocusSlide(slider)}
            >
              <h2 className="productNumber">{slider.id}</h2>
              <nav className="productDescription">
                <h2>{slider.Title}</h2>
                <p>{slider.subTitle}</p>
              </nav>
            </li>
          ))}
        </ul>
        <div className="productScreen">
          <img src={focusSlide.img} alt={focusSlide.imgDescrition} />
          <section className="productInfo">
            <img src={info} alt={focusSlide.imgDescrition} />
            <p>{focusSlide.imgDescrition}</p>
          </section>
        </div>
      </div>
    </Products>
  );
}
