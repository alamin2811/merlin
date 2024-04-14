import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/styles/common-style.css';
import '../public/assets/styles/buttons-style.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
