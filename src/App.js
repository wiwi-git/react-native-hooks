import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Dog from './components/Dog';
// import Counter from './components/Counter';
import Form from './components/Form';
import Length from './components/Length';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Container>
      {/* <Counter /> */}
      {/* <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(prev => !prev)}
      />
      {isVisible && <Form />} */}
      {/* <Length /> */}
      <Dog />
    </Container>
  );
};

export default App;
