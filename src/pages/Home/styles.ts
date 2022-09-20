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
  padding: 4rem 9rem;
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

      .ArrowRight {
        margin-left: 11rem;
        background-color: #023535;
        border-radius: 4px;
        width: 3.5rem;
        height: 2.5rem;
        color: ${(props) => props.theme.colors.primaryGreenBelt};
      }
    }
  }

  .div-second-conteiner {
    .ImgCover {
      margin-top: 3.6rem;
      width: 100%;
      height: 30.34rem;
      @media screen and (max-width: 750px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem !important;
    .div-first-conteiner {
      width: 100%;
      text-align: center;
      margin-top: 7rem;
      .button-first-container {
        margin: 3rem auto;
      }
    }
    .div-second-conteiner {
      .ImgCover {
        margin-top: 1rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 1rem !important;
    .div-first-conteiner {
      width: 100%;
      text-align: left;
      margin: 7rem 0 3.5rem 0;
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
      .ImgCover {
        display: none;
      }
    }
  }
`;
export const PartnerContainer = styled.div`
  width: 100%;
  display: flex;

  .div-partner-text {
    width: 37.5%;
    min-width: 37.5%;
    background-color: #225d5d;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 9rem;

    span {
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      color: #fff;
      text-transform: uppercase;
      padding-right: 5.3rem;
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
  @media screen and (max-width: 1050px) {
    .div-partner-text {
      padding-left: 2rem;
    }
    .div-partners {
      display: flex;
      img {
        width: 40%;
        padding-right: 4rem;
      }
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    .div-partner-text {
      width: 100%;
      height: 5rem;
      text-align: center;
      padding: 1.6rem 4.5rem 1.6rem 4.5rem;
      justify-content: center;

      span {
        font-size: ${(props) => props.theme.fontSize.small};
        padding-right: 0;
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
  padding: 0 9rem;

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
  @media screen and (max-width: 1050px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 1rem;
    margin: 3.5rem 0;
    display: flex;
    justify-content: center;
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
  padding: 5rem 9rem 5rem 9rem;
  background: rgba(2, 53, 53, 0.9);
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
  @media screen and (max-width: 1300px) {
    padding: 3.5rem 2rem 3.5rem 2rem;
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
  padding: 0 9rem;
  .div-teamInfo {
    width: 65%;
    .team {
      opacity: 0.6;
    }
    width: 50%;
    padding-top: 6.5rem;
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
    margin-top: 5rem;
    padding-left: 1rem;
    img {
      width: 100%;
      max-height: 38rem;
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 0 2rem;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 3.5rem 1rem;
    flex-direction: column;
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
      padding: 0;
    }
  }
`;
export const TestimonialContainer = styled.div`
  width: 100%;
  padding: 3.5rem 9rem 0 9rem;
  background-color: #f7f7f7;
  height: 38.6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  .div-ParterTalkTop {
    width: 100%;

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
    }
  }
  .div-imgPeople {
    width: 100%;
    display: flex;
    margin-top: 3rem;
    .div-testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        padding: 1.3rem 0 0 0;
        line-height: 25px;
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.medium};
        color: #191a15;
        display: flex;
        align-self: center;
      }
      h4 {
        display: flex;
        align-self: center;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    padding: 3.5rem 3rem 0 3rem;
  }
  @media screen and (max-width: 900px) {
    padding: 3.5rem 1rem;
    .div-ParterTalkTop {
      span {
        font-size: ${(props) => props.theme.fontSize.medium};
        text-align: center;
        font-weight: ${(props) => props.theme.fontWeight.medium};
      }
      h2 {
        font-size: ${(props) => props.theme.fontSize.xxlarge};
        line-height: 34px;
        text-align: center;
        font-weight: ${(props) => props.theme.fontWeight.semiBold};
      }
    }
    .div-imgPeople {
      flex-direction: column-reverse;
      .div-People {
        padding-top: 1.62rem;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        img {
          width: 40%;
          margin-right: 1.25rem;
        }
        .div-PeopleInfo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            font-size: 18px;
            font-weight: ${(props) => props.theme.fontWeight.medium};
            line-height: 24px;
            color: #191a15;
            align-self: flex-start;
          }
          h4 {
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            color: #191a15;
            align-self: flex-start;
          }
        }
        .ArrowRightMobile {
          color: #6a6a6ac7;
          margin-top: 4.125rem;
          margin-right: 0.75rem;
          display: inline;
        }
        .ArrowLeftMobile {
          margin-top: 4.125rem;
          margin-left: 0.75rem;
          display: inline;
        }
        .mobile {
          display: flex;
          .ArrowLeft {
            transform: rotate(-180deg);
          }
          .ArrowRight {
            padding-top: 1.5rem;
            padding-bottom: 0%;
            transform: rotate(0deg);
          }
        }
      }
      .div-testimonial {
        width: 100%;
      }
      span {
        padding-left: 0;
        padding-right: 0;
      }
    }
    .div-testimonial {
      .quotationMarksTop {
        padding-left: 0;
        margin-bottom: 0.875rem;
      }
      span {
        font-size: ${(props) => props.theme.fontSize.large};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: 24px;
      }
      .quotationMarksBottom {
        display: none;
      }
      .ArrowRight {
        display: none;
      }
      .ArrowLeft {
        display: none;
      }
    }
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5.5rem 9rem 5.5rem 9rem;
  background: rgba(2, 53, 53, 0.9);
  display: flex;
  .googleMapMobile {
    display: none;
  }
  .div-Contacts {
    width: 50%;
    padding-top: 3.5rem;
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
      padding-right: 2rem;
      width: 80%;
    }
  }
  .div-ContactForm {
    width: 50%;
    height: 41.5rem;
    border-radius: 5px;
    background-color: #fff;
    padding: 2rem 2.3rem;
    margin-top: 3.8rem;

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
  @media screen and (max-width: 1300px) {
    padding: 3.5rem 3rem 0 3rem;
  }
  @media screen and (max-width: 900px) {
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
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
      height: 41.5rem;
      width: 100%;
      padding: 1.5rem 1.5rem 2.3rem 1.5rem;
    }
    .googleMapMobile {
      width: 100%;
      padding-top: 2rem;
      width: 100%;
      padding-right: 2rem;
    }
  }
`;
