import React, { Component } from 'react';
import DataTable from './data-table/DataTable';

const columns = {};
Array(10).fill().forEach((n , i) => {
  columns[i+1] = {
    label: `Teste label teste label teste ${i+1}`,
    search: i < 3 ? true : false,
    //align: i < 3 ? 'center' : 'right',
    type: i >= 3 ? 'NUMBER' : '',
    cellRenderer: ({ row }) => 'x',
    footer: ({ columnKey, rows }) => columnKey
  }
});
const rows = Array(10).fill().map((k,i) => {
  const c = {};
  Object.keys(columns).forEach(key => {
    const column = columns[key];
    c[key] = `${key} - ${i + 1}`
  })
  return c;
});

// const columns = {
//   "1":{
//     "label":"Teste label teste label teste 1",
//     "type":"",      
//     columns:{
//       "2":{"label":"Teste label teste label teste 2","search":true,"type":""},"3":{"label":"Teste label teste label teste 3","search":true,"type":""}
//     }
// },
//   "4":{"label":"Teste label teste label teste 4","search":true,"type":"NUMBER", style: { fontColor: 'red' }},
//   // "5":{"label":"Teste label teste label teste 5","search":false,"type":"NUMBER"},
//   // "6":{"label":"Teste label teste label teste 6","search":false,"type":"NUMBER"},
//   // "7":{"label":"Teste label teste label teste 7","search":false,"type":"NUMBER"},
//   // "8":{"label":"Teste label teste label teste 8","search":false,"type":"NUMBER"},
//   // "9":{"label":"Teste label teste label teste 9","search":false,"type":"NUMBER"},
//   // "10":{"label":"Teste label teste label teste 10","search":false,"type":"NUMBER"}
// };
// const rows = [{"1":"1 - 1","2":"2 - 1","3":"3 - 1","4":"4 - 1","5":"5 - 1","6":"6 - 1","7":"7 - 1","8":"8 - 1","9":"9 - 1","10":"10 - 1"},{"1":"1 - 2","2":"2 - 2","3":"3 - 2","4":"4 - 2","5":"5 - 2","6":"6 - 2","7":"7 - 2","8":"8 - 2","9":"9 - 2","10":"10 - 2"},{"1":"1 - 3","2":"2 - 3","3":"3 - 3","4":"4 - 3","5":"5 - 3","6":"6 - 3","7":"7 - 3","8":"8 - 3","9":"9 - 3","10":"10 - 3"}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="teste">
        <DataTable
          rows={rows}
          columns={columns}
          exportCsv
          rowsCount
          title="Teste"
          width="80%"
          footerHeight={50}
        />
        fim
      </div>
    );
  }
}


export default App;
