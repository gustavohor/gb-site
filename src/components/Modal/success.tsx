import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Input from '@/@core/components/Input';
import {Modal, ModalBody, ModalFooter} from '@core/components/Modal';
import Dropzone from '@/@core/components/Dropzone';
import {Container} from './styles';
import {useDisclosure} from 'react-use-disclosure';
import imgSuccess from '@/assets/Imagens/success.svg';
import {SuccessContainer} from './styles';

interface PropsModalSuccess {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export function ModalSuccess({isOpen, toggle}: PropsModalSuccess) {
  function CloseModal() {
    toggle(false);
  }
  return (
    <SuccessContainer>
      <Modal isOpen={isOpen} toggle={CloseModal} size="md">
        <ModalBody>
          <section className="--img">
            <img src={imgSuccess} alt="teste" />
          </section>
          <section className="--text">
            <h2>Oba! Recebemos seu currículo.</h2>
            <span>
              Já recebemos seus dados e agora você faz parte do nosso banco de
              talentos, assim que qualquer vaga abrir para seu eprfil você será
              contatado.
            </span>
          </section>
        </ModalBody>
      </Modal>
    </SuccessContainer>
  );
}
