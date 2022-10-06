import { useRef, useState, useEffect, useCallback } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import quotation from "@/assets/Icons/quotation.svg";
import quotationInv from "@/assets/Icons/quotationI.svg";
import { TestimonialContainer } from "./styles";
import { People } from "@/utils/mock";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonial() {
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
    <TestimonialContainer>
      <div className="Testimonial">
        <div className="div-ParterTalkTop">
          <span> DEPOIMENTOS</span>
          <h2>Confira o que nossos parceiros estão falando</h2>
        </div>
        <div className="prevSwiper">
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
                  <img src={Peoples.img} alt={Peoples.name} />
                  <section>
                    <span>{Peoples.name}</span>
                    <h4>{Peoples.charge}</h4>
                  </section>
                </div>
                <div className="swiperSliderDepoiment">
                  <img src={quotation} alt="aspas" />
                  <br></br>
                  <span>{Peoples.testimonial}</span>
                  <section className="quotation">
                    <img src={quotationInv} alt="aspas" />
                  </section>
                </div>
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
                  currentIndex === People.length - 1
                    ? { color: "gray", cursor: "not-allowed" }
                    : { cursor: "pointer" }
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
