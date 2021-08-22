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
  Spacer
} from '../../styles';


const Car = () => {

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
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={40}>
        <Title>Cadastre o seu veículo</Title>
        <SubTitle>Preencha os dados abaixo:</SubTitle>
      </Container>
      <Container justify="flex-start">
        <Spacer height={50} />
        <Input placeholder="Placa do veículo" placeholderTextColor={theme.colors.muted}/>
        <Spacer />
        <Input placeholder="Marca"  placeholderTextColor={theme.colors.muted}/>
        <Spacer />
        <Input placeholder="Modelo"  placeholderTextColor={theme.colors.muted}/>
        <Spacer />
        <Input placeholder="Cor"  placeholderTextColor={theme.colors.muted}/>
      </Container>
      {visible && (
        <Container height={70} justify="flex-end">
          <Button>
            <ButtonText>Próximo Passo</ButtonText>
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default Car;