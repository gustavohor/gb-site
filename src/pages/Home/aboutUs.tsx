import { useRef, useState, useEffect, useCallback } from "react";
import { AboutUsContainer, AboutUsMVVContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { Autoplay } from "swiper";
import { aboutUsText, aboutUsMVV } from "@/utils/mock";
import Star from "@/assets/Icons/Star.svg";
import Like from "@/assets/Icons/Like.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AboutUs() {
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
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <>
      <AboutUsContainer>
        <div className="topAboutUs" id="aboutUs">
          <div className="div-info">
            <div className="div-title">
              <span>QUEM SOMOS</span>
              <h2>
                Parceiros para transformar seu negócio em algo mais funcional
              </h2>
            </div>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper.el;
              }}
              spaceBetween={60}
              centeredSlides={true}
              className="mySwiper"
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {aboutUsText.map((item) => (
                <SwiperSlide key={item.id}>
                  <span>{item.text}</span>
                </SwiperSlide>
              ))}
              <div className="div-Button" style={{ cursor: "pointer" }}>
                <button
                  className="buttonPrev"
                  onClick={() => goPrev()}
                  style={
                    currentIndex === 0
                      ? { color: "gray", cursor: "not-allowed" }
                      : { cursor: "pointer" }
                  }
                >
                  <BsArrowLeftCircle size={32} />
                </button>
                <button
                  onClick={() => goNext()}
                  className="buttonNext"
                  style={
                    currentIndex === aboutUsText.length - 1
                      ? { color: "gray", cursor: "not-allowed" }
                      : { cursor: "pointer" }
                  }
                >
                  <BsArrowRightCircle size={32} />
                </button>
              </div>
            </Swiper>
          </div>
          <div className="IconsAdvantage">
            <div className="Star">
              <img src={Star} alt="Estrelas" />
              <span>
                Qualidade nas entregas <br></br>
                <b>Produtos detalhistas</b>
              </span>
            </div>
            <div className="Like">
              <img src={Like} alt="Estrelas" />
              <span>
                Satisfação dos clientes <br></br>
                <b>98%</b>
              </span>
            </div>
          </div>
        </div>
      </AboutUsContainer>
      <AboutUsMVVContainer>
        {aboutUsMVV.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <section>
              <h2>{item.title}</h2>
              <span>{item.text}</span>
            </section>
          </div>
        ))}
      </AboutUsMVVContainer>
    </>
  );
}
