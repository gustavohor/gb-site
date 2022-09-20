import styled from 'styled-components';

interface AccordionContainerProps {
  isOpen: boolean;
  maxHeight: string;
}

export const Container = styled.div<AccordionContainerProps>`
  width: 100%;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};

  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;
