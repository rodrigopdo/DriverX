import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';
import { 
  Container, 
  Button, 
  ButtonText, 
  Title, 
  SubTitle
} from '../../styles';

const Payment = () => {
  return (
    <Container padding={30} justify="flex-start" color="light">
      <Container align="flex-start" height={40}>
        <Title>Escolha como pagar</Title>
        <SubTitle>Preencha os dados do cartão de crédito</SubTitle>
      </Container>

      <Container>
        <CreditCardInput />
      </Container>
      
      <Container height={70} justify="flex-end">
        <Button>
          <ButtonText>Comece a usar</ButtonText>
        </Button>
      </Container>
    </Container>
  )
};

export default Payment;