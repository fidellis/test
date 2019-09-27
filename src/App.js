import React, { Component } from 'react';
import DataTable from './data-table/DataTable';
import { Button, DateInput, NumberInput, Radio, Select, SelectAsync, Switch, TextArea, TextInput } from 'form';
import Form from './form/Form';

const columns = {};
Array(10).fill().forEach((n, i) => {
  columns[i + 1] = {
    label: `Teste label teste label teste ${i + 1}`,
    search: i < 3,
    // align: i < 3 ? 'center' : 'right',
    type: i >= 3 ? 'NUMBER' : '',
    cellRenderer: ({ row, column }) => row[column.key],
    footer: ({ columnKey, rows }) => columnKey,
  };
});
const rows = Array(10).fill().map((k, i) => {
  const c = {};
  Object.keys(columns).forEach((key) => {
    const column = columns[key];
    c[key] = `${key} - ${i + 1}`;
  });
  return c;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        //text: 'teste'
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(p) {
    console.log('onSubmit')
  }

  onChange({ id, value }) {
    this.setState(({ data }) => ({ data: { ...data, [id]: value } }));
  }

  render() {
    return (
      <div className="teste">
        <Form
          onSubmit={this.onSubmit}          
          >
          
          <TextInput
            id="text"
            label="TextInput"
            onChange={this.onChange.bind(this)}
            value={this.state.data.text}
            //error="erro"
            required
          />
          <DateInput
            id="date"
            label="DateInput"
            onChange={this.onChange.bind(this)}
            value={this.state.data.date}
            // required
          />
          <NumberInput
            id="number"
            label="NumberInput"
            onChange={this.onChange.bind(this)}
            value={this.state.data.number}
          />
          <Radio
            id="radio"
            label="Radio"
            onChange={this.onChange.bind(this)}
            value={this.state.data.radio}
            options={[{
              label: 'Sim',
              value: true,
            }, {
              label: 'Não',
              value: false,
            }]}
          />
          <Select
            id="select"
            label="Select"
            onChange={this.onChange.bind(this)}
            options={[{ value: 1, label: 'Testando' }]}
            value={this.state.data.select}
          />
          <SelectAsync id="selectAsync" label="SelectAsync" />
          <Switch
            id="switch"
            label="Switch"
            checked={this.state.data.switch}
            onChange={this.onChange.bind(this)}
          />
          <TextArea
            id="textarea"
            label="TextArea"
            onChange={this.onChange.bind(this)}
            value={this.state.data.textarea}
          />
       
        </Form>
        {/* <DataTable
          rows={rows}
          columns={columns}
          exportCsv
          rowsCount
          title="Teste"
          width="80%"
          footerHeight={50}
        /> */}


      </div>
    );
  }
}


export default App;
