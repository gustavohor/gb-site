import styled from 'styled-components';

export const Container = styled.div`
  .Form {
    .__div {
      display: flex;
      flex-direction: column;
      margin: 0 2rem;
      .description {
        max-width: 380px;
        font-weight: ${(props) => props.theme.fontWeight.regular};
        font-size: ${(props) => props.theme.fontSize.large};
        line-height: 24px;
        color: #2c2c2c;
        opacity: 0.6;
      }
      section {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        form {
          .custom-input {
            margin-bottom: 1.5rem;
          }
          .--span {
            margin-bottom: 0.8rem !important;
            font-size: ${(props) => props.theme.fontSize.medium} !important;
            font-weight: ${(props) => props.theme.fontWeight.medium} !important;
            color: #3c3c3c !important;
          }
        }
      }
    }
    .__sec {
      margin: 0 1rem;
      width: 100%;
      max-width: 436px;
      .submit {
        padding: 0;
        background: rgba(2, 53, 53, 0.9);
        color: #fff;
      }
    }
  }
`;
export const SuccessContainer = styled.div`
  .--img {
    text-align: center;
    margin-bottom: 5rem;
  }
  .--text {
    margin-left: 2.6rem;
    max-width: 381px;
    padding-bottom: 2.75rem;
    h2 {
      font-size: ${(props) => props.theme.fontSize.xlarge};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      color: #2c2c2c;
      line-height: 40px;
      margin-bottom: 1rem;
    }
    span {
      font-weight: ${(props) => props.theme.fontWeight.regular};
      font-size: ${(props) => props.theme.fontSize.large};
      line-height: 24px;
      color: #2c2c2c;
      opacity: 0.6;
    }
  }
`;
