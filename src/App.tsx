import React from 'react';
import Calculator from './components/Calculator';
import GlobalStyle from './styles/globalConfig';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Calculator/>
    </>
  );
};

export default App;
