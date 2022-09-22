import styled from 'styled-components';
export const Footer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  border-top: 2px solid #ffffff09;
  background: rgba(2, 53, 53, 0.9);
  justify-content: center;

  .Footer {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    width: 50%;
    flex-direction: column;
    align-items: end;
    display: flex;
    img {
      padding-top: 1.5rem;
    }
    p {
      padding-top: 2.25rem;
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
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
  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    .Footer {
      display: flex;
      flex-direction: column;
    }
    .div-FooterMenu {
      width: 100%;
      justify-content: center;
    }
    .div-FooterLogo {
      width: 100%;
      align-items: center;
      img {
        width: 30%;
      }
    }
    .div-FooterRS {
      width: 50%;

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
  @media screen and (max-width: 400px) {
    .div-FooterMenu {
      ul li a {
        padding: 0 10px 0 0;
      }
    }
  }
`;
