import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Input from '@/@core/components/Input';
import {Modal, ModalBody, ModalFooter} from '@core/components/Modal';
import Dropzone from '@/@core/components/Dropzone';
import {Container} from './styles';
import {useDisclosure} from 'react-use-disclosure';
import {ModalSuccess} from './success';

interface PropsModalForm {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export function ModalForm({isOpen, toggle}: PropsModalForm) {
  function CloseModal() {
    toggle(false);
  }
  const {
    isOpen: isOpenSuccess,
    toggle: toggleSuccess,
    close: closeModalSuccess,
  } = useDisclosure();
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        toggle={CloseModal}
        size="md"
        title="Trabalhe conosco"
      >
        <div className="Form">
          <ModalBody>
            <div className="__div">
              <span className="description">
                Preencha o formulário abaixo e você fará parte do nosso banco de
                talentos e terá preferência no contato ao surgir novas vagas.
              </span>
              <section>
                <form action="onSubmit">
                  <Input
                    labelText="Seu nome*"
                    type="text"
                    placeholder="Insira seu nome aqui..."
                  />
                  <Input
                    labelText="E-mail*"
                    type="email"
                    placeholder="Seu email favorito"
                  />
                  <Input
                    labelText="Telefone*"
                    type="phone"
                    placeholder="Seu telefone favorito"
                  />
                  <Input
                    labelText="Endereço completo*"
                    type="text"
                    placeholder="Seu endereço completo"
                  />
                  <Input
                    labelText="Escolaridade*"
                    type="text"
                    placeholder="Qual sua escolaridade"
                  />
                  <Input
                    labelText="Formação acadêmica*"
                    type="text"
                    placeholder="Nos conte um pouco mais sobre o que deseja..."
                    rowSpan={10}
                    colSpan={30}
                  />
                  <Input
                    labelText="Experiencias profissionais*"
                    type="text"
                    placeholder="Nos conte um pouco mais sobre suas experiências profissionais..."
                    rowSpan={10}
                    colSpan={30}
                  />
                  <span className="--span">Currículo</span>
                  <Dropzone
                    infoText1="Arraste e jogue seu anexo aqui ou se preferir"
                    inputText="Escolha um arquivo para upload"
                    infoText2="Formatos aceitos PDF e DOCX"
                    setFile={() => {}}
                  />
                </form>
              </section>
            </div>
          </ModalBody>
          <ModalFooter>
            <section className="__sec">
              <Input
                type="submit"
                className="submit"
                onClick={toggleSuccess}
                value="Enviar mensagem"
              />
            </section>
          </ModalFooter>
        </div>
      </Modal>
      <ModalSuccess isOpen={isOpenSuccess} toggle={closeModalSuccess} />
    </Container>
  );
}
