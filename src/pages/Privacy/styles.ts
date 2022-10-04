import styled from 'styled-components';

export const Container = styled.div`
  margin: 8rem auto 4rem auto;
  max-width: 1152px;
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    opacity: 0.6;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #3c3c3c;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.xxxlarge};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    line-height: 40px;
    margin: 2.25rem 0;
  }
  h3 {
    margin: 2rem 0;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.fontSize.large};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 24px;
  }

  ul li span {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 24px;
    b {
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      font-size: ${(props) => props.theme.fontSize.large};
    }
  }
`;
