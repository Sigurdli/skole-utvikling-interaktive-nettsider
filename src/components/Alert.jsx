import React, { useState } from 'react';

const Alert = (props) => {
  const [inputFromChild, setInputFromChild] = useState('');

  const klikkHandler = () => {
    console.log('Clicked');
  };

  const endringsHandler = (e) => {
    console.log('Changed');
    setInputFromChild(e.target.value);
  };

  return (
    <>
      <button onClick={klikkHandler}>Klikk her</button>
      <input onChange={endringsHandler} value={inputFromChild} />
      <p>{inputFromChild}</p>
    </>
  );
};

export default Alert;
