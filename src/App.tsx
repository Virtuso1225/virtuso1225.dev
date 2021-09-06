import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default App;
