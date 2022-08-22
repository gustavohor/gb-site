import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100%);
  position: fixed;
  right: 0;
  top: 0;
  backdrop-filter: blur(3px);
  height: ${(props) => props.theme.sizes.navbarHeight};
  border-bottom: 1px ridge #ffffff30;
  @media screen and (max-width: 800px) {
    height: ${(props) => props.theme.sizes.navbarHeightMobile};
  }

  .navbar {
    width: 100%;
    padding: 0 9rem;
    background-color: ${(props) => props.theme.colors.primary[900]};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #fff;
    align-content: center;
    @media screen and (max-width: 1050px) {
      padding: 0 2rem;
    }

    @media screen and (max-width: 800px) {
      padding: 2rem;
      flex-wrap: wrap;
      justify-content: center;
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
    a {
      color: #fff;
      text-decoration: none;
      padding-right: 3.5rem;
      @media screen and (max-width: 800px) {
        padding: 0;
      }
    }
    .contact {
      color: #3cfca0;
      font-family: ${(props) => props.theme.headings.heading5};
      border-left: #fff 1px solid;
      padding-left: 1.5rem;
      align-items: center;
      display: inline-flex;
      .icon {
        margin-left: 1rem;
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
`;
