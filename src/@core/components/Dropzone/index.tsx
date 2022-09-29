import {Dispatch, FunctionComponent, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {ReactComponent as Upload} from '@/assets/Icons/upload.svg';
import {classNames} from '@/utils/classNames';
import {Container} from './styles';

const DropZone: FunctionComponent<{
  setFile: Dispatch<any>;
  infoText1: string;
  inputText: string;
  infoText2: string;
  error?: boolean;
  helperText?: string;
}> = ({setFile, infoText1, inputText, infoText2, error, helperText}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: false});
  return (
    <Container
      className={classNames('custom-input ', {
        '--error': error,
      })}
    >
      <div {...getRootProps()}>
        <label htmlFor="dropzone" className="input-label">
          <div className="__icon">
            <Upload />
          </div>
          <span className="--label-text-1">{infoText1}</span>
          <p className="--input-text">{inputText}</p>
          <span className="--label-text-2">{infoText2}</span>
        </label>
        {helperText && (
          <span className="custom-input__helper-text">
            {helperText}
            <br />
          </span>
        )}
        <input {...getInputProps()} id="dropzone" />
      </div>
    </Container>
  );
};

export default DropZone;
