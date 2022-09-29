import {forwardRef, HTMLProps, useEffect, useRef, useState} from 'react';
import {IconType} from 'react-icons';
import {FiEye, FiEyeOff} from 'react-icons/fi';
import {classNames} from '@/utils/classNames';
import {mask} from '@/utils/remask';
import {Container} from './styles';

interface CustomInputProps extends HTMLProps<HTMLInputElement> {
  labelText?: string;
  helperText?: string;
  mask?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  success?: boolean;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, CustomInputProps>(function Input(
  {
    labelText,
    helperText,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    success,
    error,
    mask: _mask,
    ...props
  },
  ref,
): JSX.Element {
  const [value, setValue] = useState(
    _mask
      ? mask(
          (props.defaultValue as string) || (props.value as string) || '',
          _mask,
        )
      : (props.defaultValue as string) || (props.value as string) || '',
  );
  const [inputType, setInputType] = useState(props.type || 'text');
  const cacheInputType = useRef<string>(props.type as string);

  useEffect(() => setValue((props.value as string) || ''), [props.value]);

  const toggleInputType = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else if (cacheInputType) {
      setInputType('password');
    }
  };

  const handlePreventTypeLetters = (e: React.KeyboardEvent) => {
    if (!/[0-9]|Backspace/.test(e.key)) e.preventDefault();
  };

  return (
    <Container
      className={classNames('custom-input', {
        '--success': success,
        '--error': error,
        '--disabled': props.disabled,
        '--password':
          inputType === 'password' || cacheInputType.current === 'password',
      })}
    >
      <label className="custom-input__label" htmlFor={props.name}>
        {labelText}
      </label>
      <div className="custom-input__wrapper" style={props.style}>
        {LeftIcon && <LeftIcon />}
        <input
          {...props}
          style={{}}
          type={inputType}
          ref={ref}
          onKeyDown={(e) => {
            props.type === 'number' && handlePreventTypeLetters(e);
            props.onKeyDown && props.onKeyDown(e);
          }}
          onKeyUp={(e) => {
            props.type === 'number' && handlePreventTypeLetters(e);
            props.onKeyUp && props.onKeyUp(e);
          }}
          onKeyPress={(e) => {
            props.type === 'number' && handlePreventTypeLetters(e);
            props.onKeyPress && props.onKeyPress(e);
          }}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange && props.onChange(e);
          }}
          value={_mask ? mask(value, _mask) : value}
        />
        {RightIcon && <RightIcon />}

        {cacheInputType.current === 'password' && (
          <div
            className={classNames('wrapper__visible-toggle', {
              '--right-icon': !!RightIcon,
            })}
          >
            {inputType === 'password' ? (
              <FiEye size={20} onClick={toggleInputType} />
            ) : (
              <FiEyeOff size={20} onClick={toggleInputType} />
            )}
          </div>
        )}
      </div>
      {helperText && (
        <span className="custom-input__helper-text">{helperText}</span>
      )}
    </Container>
  );
});

export default Input;
