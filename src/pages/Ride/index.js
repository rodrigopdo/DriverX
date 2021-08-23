import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import theme from '../../styles/theme.json';

import { 
  Container, 
  Button, 
  ButtonText, 
  Title, 
  SubTitle,
  Input,
  AddressList
} from '../../styles';


const Ride = () => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => setVisible(false),
  );
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => setVisible(true),
  );
  return () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
  };

  }, [])

  return (
    <>
      <Container row height={70} justify="flex-start">
        <Container align="flex-start" padding={20}>
          <SubTitle>Voltar</SubTitle>
        </Container>
        <Container>
          <Title>Corrida</Title>
        </Container>
        <Container align="flex-end" padding={20}>

        </Container>
      </Container>

      <Container padding={30} justify="flex-start">
        <Container height={90} justify="flex-start">
          <Input placeholder="Embarque"/>
          <Input placeholder="Destino"/>
        </Container>
        <Container>
          <AddressList />
        </Container>
      </Container>


        {visible && (
        <Container height={70} padding={10} justify="flex-end">
          <Button>
            <ButtonText>Próximo Passo</ButtonText>
          </Button>
        </Container>
      )}
    </>
  );
};

export default Ride;