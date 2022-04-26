import React from 'react';
import Home from './pages/Home';
import UrlProvider from './providers/urlProvider';

function App() {
  return (
    <>
      <UrlProvider>
        <Home />
      </UrlProvider>
    </>
  );
}

export default App;
