import React from 'react';
import { Text } from 'react-native';

import { Container, Button, ButtonText, Title, SubTitle } from '../../styles'

const Type = () => {
  return (
    <Container padding={30} justify="flex-start" color="light">
      <Container align="flex-start" height={40}>
        <Title>Passageiro ou motorista</Title>
        <SubTitle>Selecione qual será a sua função no DriveX</SubTitle>
      </Container>
      
      <Container>

      </Container>
      
      <Container height={70} justify="flex-end">
        <Button>
          <ButtonText>Próximo Passo</ButtonText>
        </Button>
      </Container>
    </Container>
  )
};

export default Type;