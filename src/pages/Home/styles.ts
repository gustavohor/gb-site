import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  @media screen and (max-width: 750px) {
    padding: 0;
  }
`;
export const FirstContainer = styled.div`
  width: 100%;
  padding: 10rem 1rem 2rem 1rem;
  display: flex;
  background: rgba(2, 53, 53, 0.9);
  align-items: center;
  justify-content: center;
  .div-first-conteiner {
    width: 50%;
    float: left;
    .quality {
      font-size: large;
      color: #fff;
      font-weight: ${(props) => props.theme.fontWeight.regular};
      border: ${(props) => props.theme.colors.primaryGreenBelt} solid 1px;
      border-radius: 5px;
      padding: 7px;
      .rectangle {
        color: #3cfca0;
        transform: rotate(45deg);
      }
    }
    .title {
      font-size: 40px;
      color: #fff;
      font-weight: 500;
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      line-height: 3.3rem;
      .bold-title {
        font-size: 40px;
        color: ${(props) => props.theme.colors.primaryGreenBelt};
      }
    }

    .description {
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      color: #fff;
      line-height: 24px;
    }

    .button-first-container {
      background-color: ${(props) => props.theme.colors.primaryGreenBelt};
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      border-radius: 2px;
      color: #2c2c2c;
      line-height: 16px;
      margin-top: 4.5rem;
      height: 3.5rem;
      padding: 0 0 0 1.3rem;
      &:hover {
        background-color: #023535;
        color: #fff;
      }

      .ArrowRight {
        margin-left: 11rem;
        background-color: #023535;
        border-radius: 4px;
        width: 3.5rem;
        height: 2.5rem;
        color: ${(props) => props.theme.colors.primaryGreenBelt};
        &:hover {
          color: #023535;
          background-color: ${(props) => props.theme.colors.primaryGreenBelt};
        }
      }
    }
  }

  .div-second-conteiner {
    .ImgCover {
      width: auto;
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem 1rem !important;
    .div-first-conteiner {
      width: 50%;
      text-align: left;
      margin-top: 7rem;
      align-self: center;
      .button-first-container {
        margin: 3rem 0;
      }
    }
    .div-second-conteiner {
      width: 50%;
      margin-top: 7rem;
      .ImgCover {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem !important;
    .div-first-conteiner {
      width: 100%;
      text-align: left;
      margin: 8.5rem 0 3.5rem 0;
      .title {
        font-size: 36px;
      }
      .description {
        margin: 0rem;
      }
      .button-first-container {
        margin: 3rem 0 0 0;
        .ArrowRight {
          margin-left: 4.4rem;
        }
      }
    }
    .div-second-conteiner {
      width: 0%;
      .ImgCover {
        display: none;
      }
    }
  }
`;
export const PartnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, rgba(34, 93, 93, 1) 37%, #023535 0%);
  .Partner {
    width: 100%;
    display: flex;
    max-width: 1200px;
  }

  .div-partner-text {
    max-width: 37%;
    width: 100%;
    background-color: #225d5d;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;

    span {
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      color: #fff;
      text-transform: uppercase;
    }
    .ArrowDown {
      top: 50%;
      right: -25px;
      transform: translateY(-50%);
      position: absolute;
      height: 50px;
      width: 50px;
      border-radius: 30px;
    }
  }
  .div-partners {
    width: 100%;
    background-color: #023535;
    padding: 3.3rem 0 3.3rem 8.3rem;
    display: flex;
    flex-wrap: wrap;
    img {
      padding-right: 7.8rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .div-partner-text {
      span {
        padding: 0 1rem;
      }
    }
    .div-partners {
      display: flex;
      img {
        padding-right: 4rem;
        .logoCasadoAdubo {
          width: 24%;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    .Partner {
      flex-direction: column;
    }

    .div-partner-text {
      width: 100%;
      max-width: 100%;
      text-align: center;
      padding: 2rem;
      justify-content: center;

      span {
        font-size: ${(props) => props.theme.fontSize.small};
        padding-right: 0;
        max-width: 299px;
      }
      .ArrowDown {
        top: 100%;
        right: 45%;
        -webkit-transform: translateY(-47%);
        -ms-transform: translateY(-47%);
        transform: translateY(-47%);
        display: flex;
        align-items: center;
        img {
          height: 70%;
        }
      }
    }
    .div-partners {
      width: 100%;
      padding: 1.6rem 4.875rem 1.6rem 3.313rem;
      height: 6.5rem;
      display: flex;
      align-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;

      img {
        padding: 0;
        width: 20%;
      }
      .logoCasal {
        width: 40%;
      }
    }
  }
`;
export const AboutUsContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #fcfcfc;
  justify-content: center;
  .topAboutUs {
    max-width: 1200px;
    width: 100%;
    display: flex;
  }
  .div-info {
    width: 50%;
    padding: 6rem 0;
    span {
      font-size: ${(props) => props.theme.fontSize.medium};
      line-height: 16px;
      font-weight: 500;
      color: #3c3c3c;
    }
    h2 {
      padding-top: 1rem;
      font-size: ${(props) => props.theme.fontSize.xxxlarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }
    .div-textMobile {
      display: none;
    }
    .IconsAdvantage {
      display: flex;
      .Star {
        float: left;
        display: flex;
        align-items: center;
        margin-top: 10.875rem;
        padding-right: 1.1rem;
        border-right: #2c2c2c solid 1px;
        img {
          margin-right: 0.8rem;
        }
        span {
          font-size: ${(props) => props.theme.fontSize.medium};
        }
      }
      .Like {
        float: left;
        display: flex;
        align-items: center;
        margin-top: 10.875rem;
        padding-left: 1.8rem;
        img {
          margin-right: 0.8rem;
        }
        span {
          font-size: ${(props) => props.theme.fontSize.medium};
        }
      }
    }
  }
  .div-text {
    width: 50%;
    padding-top: 8rem;
    padding-left: 8rem;
    span {
      font-size: ${(props) => props.theme.fontSize.large};
      line-height: 24px;
    }
    h3 {
      padding-top: 7rem;
      display: flex;
      align-items: center;
      font-size: ${(props) => props.theme.fontSize.large};
    }
    .IconsAdvantageMobile {
      display: none;
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem 1rem !important;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 3.5rem 1rem !important;
    display: flex;
    justify-content: center;
    .topAboutUs {
      flex-direction: column;
    }
    .div-info {
      width: 100%;
      padding: 0 0;
      h2 {
        font-size: ${(props) => props.theme.fontSize.xxlarge};
        padding-bottom: 2.5rem;
        line-height: 33.6px;
      }
      .div-textMobile {
        display: inline;
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: 24px;
        color: #3c3c3c;
      }
      .IconsAdvantage {
        flex-direction: column;
        .Star {
          margin-top: 2.5rem;
          border: none;
        }
        .Like {
          margin-top: 2rem;
          padding-left: 0;
        }
      }
    }
    .div-text {
      width: 100%;
      padding-top: 0;
      padding-left: 0;
      h3 {
        padding-top: 2.5rem;
        padding-bottom: 2rem;
      }
      span {
        display: none;
      }
      h2 {
        padding-top: 2.5rem;
      }
    }
  }
`;
export const Products = styled.div`
  width: 100%;
  padding: 5rem 0;
  background: rgba(2, 53, 53, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: #fff;
    margin-bottom: 1rem;
    opacity: 0.6;
  }
  .productH2 {
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.xxxlarge};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: #fff;
    text-align: center;

    line-height: 40px;
  }
  .productDesktop {
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    .productList {
      width: 40%;
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      .productText {
        display: flex;
        cursor: pointer;
        align-items: center;
        .Numbers {
          margin: 1.96rem 1.5rem;
        }
        &:hover {
          transition: 0.5s;
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(60, 252, 160, 0.15) 65.74%,
            rgba(60, 252, 160, 0) 101.31%
          );
          border-left: 5px solid #3cfca0;
          .Numbers {
            color: #3cfca0;
          }
        }

        h2 {
          font-size: ${(props) => props.theme.fontSize.extra};
          color: #fff;
          padding-bottom: 0.5rem;
        }
        .productDescription {
          align-self: center;
          padding-right: 2.3rem;

          h2 {
            color: #fff;
            font-size: ${(props) => props.theme.fontSize.large};
            line-height: 16px;
            opacity: 0.87;
          }
          p {
            color: #fff;
            font-size: ${(props) => props.theme.fontSize.large};
            font-weight: ${(props) => props.theme.fontWeight.regular};
            opacity: 0.6;
            line-height: 24px;
          }
        }
      }
      .productContainerActive {
        display: flex;
        cursor: pointer;
        align-items: center;
        transition: 0.5s;
        left: 0;
        background: linear-gradient(
          90deg,
          rgba(60, 252, 160, 0.15) 65.74%,
          rgba(60, 252, 160, 0) 101.31%
        );
        border-left: 5px solid #3cfca0;
        .Numbers {
          color: #3cfca0;
          margin: 1.96rem 1.5rem;
        }
        h2 {
          font-size: ${(props) => props.theme.fontSize.extra};
          color: #fff;
          padding-bottom: 0.5rem;
        }
        .productDescription {
          align-self: center;
          padding-right: 2.3rem;

          h2 {
            color: #fff;
            font-size: ${(props) => props.theme.fontSize.large};
            line-height: 16px;
            opacity: 0.87;
          }
          p {
            color: #fff;
            font-size: ${(props) => props.theme.fontSize.large};
            font-weight: ${(props) => props.theme.fontWeight.regular};
            opacity: 0.6;
            line-height: 24px;
          }
          .productScreenMobile {
            display: none;
          }
        }
      }
    }
    .productInfo {
      display: flex;
      margin-top: 3rem;

      p {
        margin-left: 1.5rem;
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        color: #fff;
        opacity: 0.6;
        line-height: 24px;
      }
    }
    .productScreen {
      width: 60%;
      display: flex;
      flex-direction: column;
      .productList {
        width: 100%;
      }
    }
  }
  .productScreenMobile {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    padding: 5rem 1rem;
  }
  @media screen and (max-width: 900px) {
    padding: 3.5rem 1rem 3.5rem 1rem;
    .productH2 {
      text-align: center;
      font-size: 22px;
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }
    .productDesktop {
      display: none;
    }
    .productScreenMobile {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: row;
      width: 100%;
      .productList {
        width: 100%;
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.semiBold};
        .productText {
          display: flex;
          cursor: pointer;
          margin: 0.5rem 0;
          align-items: center;
          border-top: 1px rgb(255, 255, 255, 0.15) solid;
          .Numbers {
            margin: 1.96rem 1.5rem;
          }
          &:hover {
            transition: 0.5s;
            left: 0;
            background: linear-gradient(
              90deg,
              rgba(60, 252, 160, 0.15) 65.74%,
              rgba(60, 252, 160, 0) 101.31%
            );
            border-left: 5px solid #3cfca0;
            .Numbers {
              color: #3cfca0;
            }
          }
          h2 {
            font-size: ${(props) => props.theme.fontSize.extra};
            color: #fff;
            padding-bottom: 0.5rem;
          }
          .productDescription {
            align-self: center;
            padding-right: 2.3rem;

            h2 {
              color: #fff;
              font-size: ${(props) => props.theme.fontSize.large};
              line-height: 16px;
              opacity: 0.87;
            }
            p {
              color: #fff;
              font-size: ${(props) => props.theme.fontSize.medium};
              font-weight: ${(props) => props.theme.fontWeight.regular};
              opacity: 0.6;
              line-height: 24px;
            }
          }
        }
        .productContainerActive {
          display: flex;
          cursor: pointer;
          align-items: center;
          transition: 0.5s;
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(60, 252, 160, 0.15) 65.74%,
            rgba(60, 252, 160, 0) 101.31%
          );
          border-left: 5px solid #3cfca0;
          margin-bottom: 0.625rem;
          padding: 0.5rem 0;
          .Numbers {
            color: #3cfca0;
            margin: 1.96rem 1rem;
          }
          h2 {
            font-size: ${(props) => props.theme.fontSize.extra};
            color: #fff;
            padding-bottom: 0.5rem;
          }
          .productDescription {
            align-self: center;
            padding-right: 2.3rem;

            h2 {
              color: #fff;
              font-size: ${(props) => props.theme.fontSize.large};
              line-height: 16px;
              opacity: 0.87;
            }
            p {
              color: #fff;
              font-size: ${(props) => props.theme.fontSize.medium};
              font-weight: ${(props) => props.theme.fontWeight.regular};
              opacity: 0.6;
              line-height: 24px;
            }
            .productScreenMobile {
              display: none;
            }
          }
        }
        .productImg {
          width: 100%;
          img.imgScreen {
            width: 100%;
          }
        }
      }
    }
  }
`;
export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 6.5rem 1rem;
  justify-content: center;
  .Team {
    display: flex;
    max-width: 1200px;
  }
  .div-teamInfo {
    width: 50%;
    .team {
      opacity: 0.6;
    }
    span {
      font-size: ${(props) => props.theme.fontSize.medium};
      line-height: 16px;
      font-weight: 500;
      color: #3c3c3c;
    }
    h2 {
      padding-top: 1rem;
      font-size: ${(props) => props.theme.fontSize.xxxlarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      padding-bottom: 5.1rem;
      line-height: 40px;
    }
    .check {
      padding-top: 1.5rem;
      display: flex;
      align-items: center;
      font-size: 18px;
      opacity: 1;
      color: #191a15;
      font-weight: ${(props) => props.theme.fontWeight.medium};
    }
  }
  .div-teamMap {
    width: 45%;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 3.5rem 1rem;
    justify-content: flex-start;

    .Team {
      flex-direction: column;
    }
    .div-teamInfo {
      width: 100%;
      padding-top: 0;
      span {
        font-size: ${(props) => props.theme.fontSize.medium};
      }
      h2 {
        font-size: ${(props) => props.theme.fontSize.xxlarge};
        line-height: 34px;
        padding-bottom: 0.5rem;
      }
      .check {
        padding-top: 1.5rem;
        font-size: ${(props) => props.theme.fontSize.large};
      }
    }
    .div-teamMap {
      width: 100%;
      padding: 2.75rem 0 0 0;
    }
  }
`;
export const TestimonialContainer = styled.div`
  width: 100%;
  background-color: #fcfcfc;
  .Testimonial {
    width: 100%;
    max-width: 1200px;
    padding: 3.5rem 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
  }
  .div-ParterTalkTop {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.medium};
    }
    h2 {
      display: flex;
      justify-content: center;
      font-size: ${(props) => props.theme.fontSize.xxxlarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      line-height: 40px;
      text-align: center;
      margin-bottom: 2.1rem;
      max-width: 552px;
    }
  }
  .swiper-slide.swiper-slide-active {
    display: flex;
    align-items: center;
  }
  .swiperSlideInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    img {
      width: 100%;
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin-top: 1.375rem;
        font-size: 18px;
        font-weight: ${(props) => props.theme.fontWeight.medium};
        padding-bottom: 0.5rem;
      }
      h4 {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  .swiperSliderDepoiment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    img {
      margin-left: 2.1rem;
    }
    span {
      margin-left: 4rem;
      font-size: ${(props) => props.theme.fontSize.xlarge};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      line-height: 24px;
    }
  }
  .div-Button {
    position: relative;
    display: flex;
    top: -170px;
    z-index: 999;
    justify-content: flex-end;
    width: 46%;
    .buttonPrev {
      background-color: transparent;
    }
    .buttonNext {
      margin-left: 1.25rem;
      background-color: transparent;
    }
  }
  @media screen and (max-width: 1200px) {
    .Testimonial {
      padding: 3.5rem 2rem;
      .prevSwiper {
        margin-bottom: -15rem;
      }
      .swiper-slide.swiper-slide-active {
      }
      .swiperSlideInfo {
        width: 30%;
        img {
          width: 100%;
        }
      }
      .swiperSliderDepoiment {
        width: 70%;
        margin: 2rem 0 2rem 0;
      }
      .div-Button {
        position: relative;
        width: 84%;
        justify-content: center;
        top: -270px;
        margin-top: 3rem;
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .Testimonial {
      padding: 3.5rem 1rem 0 1rem;
      .prevSwiper {
        margin-bottom: 0;
      }
      .swiper-slide.swiper-slide-active {
        display: flex;
        flex-direction: column-reverse;
        section {
          h4 {
            text-align: center;
          }
        }
      }
      .swiperSlideInfo {
        width: 100%;
        img {
          width: auto;
        }
      }
      .swiperSliderDepoiment {
        width: 100%;
        img {
          margin-left: 0;
        }
        span {
          margin-left: 0;
          font-size: ${(props) => props.theme.fontSize.large};
        }
      }
      .div-Button {
        position: unset;
        width: 100%;
        justify-content: center;
        top: 0;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .swiperSlideInfo {
      img {
        width: 100%;
      }
    }
  }
`;
export const ContactContainer = styled.div`
  width: 100%;
  padding: 5.5rem 1rem;
  background: rgba(2, 53, 53, 0.9);
  display: flex;
  justify-content: center;
  .contactContainer {
    display: flex;
    max-width: 1200px;
  }
  .googleMapMobile {
    display: none;
  }
  .div-Contacts {
    width: 50%;
    span {
      font-size: ${(props) => props.theme.fontSize.large};
      line-height: 16px;
      font-weight: ${(props) => props.theme.fontWeight.medium};
      opacity: 0.6;
      color: #ffffff;
    }
    h2 {
      padding-top: 1rem;
      font-size: ${(props) => props.theme.fontSize.xxxlarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      line-height: 40px;
      color: #ffffff;
      max-width: 579px;
    }
    p {
      padding-top: 1.5rem;
      padding-right: 6rem;
      font-size: ${(props) => props.theme.fontSize.large};
      line-height: 24px;
      font-weight: ${(props) => props.theme.fontWeight.regular};
      color: #ffffff;
    }
    .googleMap {
      margin-top: 6rem;
    }
  }
  .div-ContactForm {
    width: 50%;
    border-radius: 5px;
    background-color: #fff;
    padding: 2rem 2.3rem;

    h2 {
      font-size: ${(props) => props.theme.fontSize.xlarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      line-height: 40px;
      padding-bottom: 1rem;
      color: #2c2c2c;
    }
    p {
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      line-height: 24px;
      color: #2c2c2c;
      padding-bottom: 2rem;
    }
    input[type='text'],
    [type='email'],
    textarea {
      width: 100%;
      padding: 11px 10px 11px 15px;
      gap: 10px;
      border: 1px solid #3c3c3c;
      border-radius: 5px;
      box-sizing: border-box;
      margin-top: 6px;
      margin-bottom: 16px;
      resize: vertical;
    }

    input[type='submit'] {
      background-color: rgba(2, 53, 53, 0.9);
      color: white;
      width: 100%;
      height: 3rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 4rem 1rem;
    display: flex;
    .contactContainer {
      flex-direction: column;
    }
    .div-Contacts {
      width: 100%;
      padding-top: 0;
      .googleMap {
        display: none;
      }
      h2 {
        font-size: ${(props) => props.theme.fontSize.xxlarge};
      }
      p {
        padding-right: 0;
        font-size: ${(props) => props.theme.fontSize.large};
      }
    }
    .div-ContactForm {
      width: 100%;
      padding: 1.5rem 1.5rem 2.3rem 1.5rem;
      margin-top: 2.5rem;
    }
    .googleMapMobile {
      width: 100%;
      padding-top: 2rem;
      width: 100%;
      display: block;
    }
  }
`;
