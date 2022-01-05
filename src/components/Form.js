import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  border: 1px solid #757575;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('\n==== form component mount ====\n');
    return () => console.log('\n==== form component unmount ====\n');
  }, []);

  useEffect(() => {
    console.log(`email: ${email}\n`);
  }, [email]);

  return (
    <Container>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>
      <StyledTextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="name"
      />
      <StyledTextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
      />
    </Container>
  );
};

export default Form;
