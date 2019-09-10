import React from 'react';
import Teste from 'test-module';
const teste = require('test-component');
function App() {
  return (
    <div>
      Teste - {teste()}
      <Teste />
    </div>
  );
}

export default App;
