import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: max-content;
  transition: all 0.3s ease-in-out;
  flex-direction: column;

  .custom-input__label {
    margin-bottom: 0.8rem;
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: #3c3c3c;
  }

  .custom-input__wrapper {
    position: relative;
    display: flex;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    align-items: center;
    width: 100%;

    > svg {
      min-width: 16px;
      color: ${(props) => props.theme.colors.primary[900]};
      margin: 10px;

      &:first-child {
        margin-right: 0;
      }
      &:last-child {
        margin-left: 0;
      }
    }

    input {
      width: 100%;
      min-height: 45px;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s;
      background: none;
      padding: 0 10px;
      border-radius: 5px;

      &::placeholder {
        color: #c2c2c2;
        font-weight: 300;
      }

      &:disabled {
        cursor: default;
        background-color: ${(props) => props.theme.colors.graysScale[100]};
        border-color: ${(props) => props.theme.colors.graysScale[700]};
      }

      &--mask {
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }

    .wrapper__visible-toggle {
      svg {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 10px;
        color: ${(props) => props.theme.colors.primary[900]};
      }

      &.--right-icon {
        svg {
          right: 25px;
        }
      }
    }
  }

  .custom-input__helper-text {
    font-size: 0.75rem;
    margin-top: 7px;
  }

  &.--success {
    .custom-input__helper-text {
      color: ${(props) => props.theme.colors.feedBack.success};
    }
    .custom-input__wrapper {
      border-color: ${(props) =>
        props.theme.colors.feedBack.success} !important;
    }
  }

  &.--error {
    .custom-input__helper-text {
      color: ${(props) => props.theme.colors.feedBack.error};
    }
    .custom-input__wrapper {
      border-color: ${(props) => props.theme.colors.feedBack.error} !important;
    }
  }

  &.--disabled {
    .custom-input__helper-text {
      color: ${(props) => props.theme.colors.feedBack.error};
    }
    .custom-input__wrapper {
      background-color: #f0f0f0;

      input {
        background-color: #f0f0f0;

        &::placeholder {
          color: #3c3c3c;
        }
      }
    }
  }
  &.--password {
    .custom-input__wrapper {
      padding-right: 50px;
      .wrapper__visible-toggle {
      }
    }
  }
`;
