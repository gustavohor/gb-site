import styled from 'styled-components';
export const Footer = styled.div`
  width: 100%;
  height: 10.7rem;
  display: flex;
  padding: 0 9rem;
  border-top: 2px solid #ffffff09;
  background: rgba(2, 53, 53, 0.9);
  .div-FooterMenu {
    width: 33%;
    display: flex;
    padding-top: 2.5rem;
    ul {
      display: flex;
      li {
        list-style-type: none;
        a {
          padding: 16px;
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  .div-FooterLogo {
    width: 33%;
    flex-direction: column;
    align-items: center;
    display: flex;
    img {
      padding-top: 1.5rem;
      width: 11.68rem;
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
  @media screen and (max-width: 750px) {
    padding: 0 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    .div-FooterMenu {
      display: none;
    }
    .div-FooterLogo {
      width: 50%;
      img {
        width: 80%;
      }
      .FooterText {
        display: none;
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
`;
