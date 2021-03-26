import React, { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const App = () => {
  const [inputFromChild, setInputFromChild] = useState('');

  return (
    <div className="App">
      <h1>The magic happens here</h1>
      <MyComponent title="It works" />
      <Food food={['Pizza', 'Hamburger', 'Coke']} />
      <Wrapper> test </Wrapper>
      <Alert useState={() => setInputFromChild(inputFromChild)} />
    </div>
  );
};

export default App;
