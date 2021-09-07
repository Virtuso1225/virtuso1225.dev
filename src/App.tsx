import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Header from './components/header/Header';
import MainCard from './components/main/MainCard';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainCard />
      <Footer />
    </>
  );
};

export default App;
