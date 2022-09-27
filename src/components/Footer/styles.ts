import styled from 'styled-components';
export const Footer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  border-top: 2px solid #ffffff09;
  background: rgba(2, 53, 53, 0.9);
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .Footer {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .div-FooterMenu {
    display: flex;
    width: 33%;
    padding: 1.5rem 0;
    ul {
      display: flex;
      li {
        list-style-type: none;
        a {
          padding: 20px;
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  .div-FooterLogo {
    width: 33%;
    flex-direction: column;
    display: flex;
    align-items: center;
  }
  .div-FooterRS {
    width: 33%;
    margin-top: 2.5rem;
    text-align-last: end;

    .FooterRSLeft {
      margin-right: 2.6rem;
    }
    .FooterRSRight {
      margin-left: 2.6rem;
    }
  }
  .FooterTextMobile {
    display: none;
  }
  div {
    p {
      padding-top: 2.25rem;
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    .Footer {
      display: flex;
      flex-direction: row;
    }
    .div-FooterMenu {
      width: 33%;
      justify-content: center;
      ul li a {
        padding: 10px;
      }
    }
    .div-FooterLogo {
      width: 33%;
      align-items: center;
      img {
        width: 50%;
      }
    }
    .div-FooterRS {
      width: 33%;

      .FooterRSLeft {
        margin-right: 3rem;
      }
      .FooterRSRight {
        margin-left: 0;
      }
    }
    .FooterTextMobile {
      display: inline;
      padding-top: 2.25rem;
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 900px) {
    .div-FooterMenu {
      display: none;
    }
    .Footer {
      .div-FooterLogo {
        width: 50%;
        align-items: flex-start;
        img {
          width: 50%;
        }
      }
      .div-FooterRS {
        width: 50%;
        margin-top: 0;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .Footer {
      .div-FooterLogo img {
        width: 100%;
      }
    }
  }
`;
