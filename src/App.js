import React from 'react';
import './app.scss'
import DataTable from 'test-component';
// const teste = require('test-component');
const App = () => {
  return (
    <div className="teste">
      Teste 
      < DataTable 
      rows={[{ a: 'A', b: 'B'}]} 
      columns={{
        a: {
          label: 'AA'
        },
        b: {
          label: 'BB'
        }
      }}/>
    </div>
  );
}

export default App;
