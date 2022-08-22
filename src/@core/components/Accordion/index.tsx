import React, {useEffect, useRef, useState} from 'react';
import {classNames} from '@/utils/classNames';
import {Container} from './styles';

interface AccordionProps {
  children: (ref: React.MutableRefObject<any>) => JSX.Element;
  isOpen: boolean;
  style?: React.CSSProperties;
}

function Accordion({children, isOpen, style}: AccordionProps) {
  const [maxHeight, setMaxHeight] = useState('0px');
  const content = useRef<HTMLElement>(null);

  useEffect(() => {
    if (content.current) {
      const height = getComputedStyle(content.current).height;
      setMaxHeight(height);
    }
  }, [isOpen]);

  if (typeof children !== 'function')
    throw new Error('Children must be a function');

  return (
    <Container
      className={classNames('accordion-wrapper', {
        '--animate': isOpen,
      })}
      maxHeight={maxHeight}
      isOpen={isOpen}
      style={style}
    >
      {children(content)}
    </Container>
  );
}

export default Accordion;
