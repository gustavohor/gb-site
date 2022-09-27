import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100%);
  position: fixed;
  right: 0;
  top: 0;
  backdrop-filter: blur(3px);
  height: ${(props) => props.theme.sizes.navbarHeight};
  z-index: 20;
  border-bottom: 1px ridge #ffffff30;
  background-color: ${(props) => props.theme.colors.primary[900]};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 4.313rem;
  }

  .navbar {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Metropolis', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #fff;
    align-content: center;
    .menuMobile {
      display: none;
    }
    @media screen and (max-width: 1050px) {
      padding: 0 2rem;
      display: flex;
    }

    @media screen and (max-width: 900px) {
      padding: 0 1rem;
      flex-wrap: nowrap;
      display: flex;
      margin: 0;

      .nav-logo-menu {
        img {
          width: 80%;
          margin: 0;
        }
      }
    }
  }

  .nav-logo-menu {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      margin: 0 auto;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;

    ul {
      list-style-type: none;
      flex-wrap: wrap;
    }
    li {
      display: inline;
      @media screen and (max-width: 800px) {
        width: 100%;
        display: block;
        text-align: center;
        padding: 10px 0;
      }
    }
    .navMenu {
      color: #fff;
      text-decoration: none;
      padding-right: 3.5rem;
      cursor: pointer;
      @media screen and (max-width: 800px) {
        padding: 0;
      }
    }
    .contact {
      color: #3cfca0;
      align-items: center;
      display: inline-flex;
      background-color: #3cfca0;
      color: black;
      font-weight: ${(props) => props.theme.fontWeight.medium};
      padding: 1rem;
      cursor: pointer;
      .icon {
        margin-left: 1.3rem;
      }

      @media screen and (max-width: 800px) {
        display: flex;
        border: none;
        align-items: center;
        height: 1.25rem;
        padding-left: 1rem;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1250px) {
    .navbar {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 800px) {
    .navbar {
      padding: 0 1rem;
      .nav-menu {
        display: none;
      }
      .menuMobile {
        display: block;
      }
      .Mobile {
        position: fixed;
        background-color: #063535;
        height: 100rem;
        top: 0;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        .MobileHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1rem 1.4rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          span {
            color: #fff;
            font-size: ${(props) => props.theme.fontSize.xlarge};
            font-weight: ${(props) => props.theme.fontWeight.light};
          }
        }
        .mobileCross {
          /* margin-left: 70%;
          margin-top: 18px; */
        }
        ul {
          margin-top: 40px;
          li {
            list-style: none;
            a {
              text-decoration: none;
              color: #ffff;
              display: flex;
              padding: 10px 20px;
              font-size: ${(props) => props.theme.fontSize.xxlarge};
              font-weight: ${(props) => props.theme.fontWeight.light};
              margin-bottom: 4rem;
            }
          }
        }
      }
    }
  }
`;
