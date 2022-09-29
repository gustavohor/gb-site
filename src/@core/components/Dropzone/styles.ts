import styled from 'styled-components';

export const Container = styled.div`
  .title {
    margin-bottom: 0.8rem;
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: #3c3c3c;
  }
  .input-label {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 195px;
    border: dashed 2px #606060;
  }

  .__icon {
    padding-bottom: 1.25rem;
  }

  .--label-text-1 {
    font-weight: 500;
  }

  .--input-text {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 1.3rem;
    border: solid 2px #008f8c;
    border-radius: 5px;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
    color: #008f8c;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .--label-text-2 {
    color: #818181;
    font-size: 14px;
  }

  &.--error {
    .--label-text-3 {
      color: ${(props) => props.theme.colors.feedBack.error};
    }

    .input-label {
      border: dashed 2px ${(props) => props.theme.colors.feedBack.error};
    }

    .--label-text-1 {
      color: ${(props) => props.theme.colors.feedBack.error};
    }
  }

  .custom-input__helper-text {
    font-size: 0.75rem;
    margin-top: 7px;
    color: ${(props) => props.theme.colors.feedBack.error};
  }
`;
