import {useState} from 'react';
import Accordion from '@/@core/components/Accordion';
import {Products} from './styles';
import info from '@/assets/Icons/Info.svg';
import {Sliders} from '@/utils/mock';
import AppStore from '@/assets/Imagens/LogoAppStore.svg';
import GooglePlay from '@/assets/Imagens/LogoGooglePlay.svg';

export default function products() {
  const [focusSlide, setFocusSlide] = useState(Sliders[0]);
  const [isOpen] = useState(true);

  return (
    <Products id="Products">
      <div className="productHeader">
        <section className="productionSection">
          <span> NOSSOS PRODUTOS</span>
          <h2 className="productH2">Alguns de nossos sistemas e produtos</h2>
        </section>
        <section>
          <img src={AppStore} alt="App Store" style={{marginRight: '1rem'}} />
          <img src={GooglePlay} alt="Google Play" />
        </section>
      </div>
      <div className="productDesktop">
        <ul className="productList">
          {Sliders.map((slider) => (
            <li
              className={
                focusSlide.id === slider.id
                  ? 'productContainerActive'
                  : 'productText'
              }
              key={slider.id}
              onClick={() => {
                setFocusSlide(slider);
              }}
            >
              <h2 className="Numbers">{slider.id}</h2>
              <nav className="productDescription">
                <h2>{slider.title}</h2>
                <p>{slider.subTitle}</p>
              </nav>
            </li>
          ))}
        </ul>
        <div className="productScreen">
          <img
            src={focusSlide.img}
            className="screen"
            alt={focusSlide.imgDescrition}
          />
          <section className="productInfo">
            <img src={info} alt={focusSlide.imgDescrition} />
            <p>{focusSlide.imgDescrition}</p>
          </section>
        </div>
      </div>
      <div className="productScreenMobile">
        <Accordion isOpen={isOpen}>
          {(ref) => (
            <ul className="productList" ref={ref}>
              {Sliders.map((slider) => (
                <>
                  <li
                    className={
                      focusSlide.id === slider.id
                        ? 'productContainerActive'
                        : 'productText'
                    }
                    key={slider.id}
                    onClick={() => {
                      setFocusSlide(slider);
                    }}
                  >
                    <h2 className="Numbers">{slider.id}</h2>
                    <nav className="productDescription">
                      <h2>{slider.title}</h2>
                      <p>{slider.subTitle}</p>
                    </nav>
                  </li>
                  {focusSlide.id === slider.id && (
                    <nav className="productImg">
                      <img
                        className="imgScreen"
                        src={focusSlide.img}
                        alt={focusSlide.imgDescrition}
                      />
                    </nav>
                  )}
                </>
              ))}
            </ul>
          )}
        </Accordion>
      </div>
    </Products>
  );
}
