import React, { Component } from 'react';
import DataTable, { ToolBar, onExportCsv } from 'data-table';
import PropTypes from 'prop-types';
// import exportIcon from './arrow_downward.svg';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
        filteredRows: props.rows
    };
  }
  render() {
    const { columns, title, actions, exportCsv, rowsCount, ...props } = this.props;
    const { filteredRows } = this.state;

    return (
      <div className="teste">
        <DataTable
          {...props}
          columns={columns}
          getRows={r => this.setState({ filteredRows: r })}          
          toolbar={
            <ToolBar 
                title={title} 
                actions={
                    [exportCsv ? <button onClick={() => onExportCsv({ rows: filteredRows, columns })} >Exportar</button> : null,
                     rowsCount ? `${filteredRows.length} registros` : null
                    ].concat(actions)}
            />
          }
        />
      </div>
    );
  }
}

Table.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array.isRequired,
  exportCsv: PropTypes.bool,
  rowsCount: PropTypes.bool,
};

Table.defaultProps = {
  title: null,
  actions: [],
  exportCsv: false,
  rowsCount: false,
  maxHeight: 700,
  headerStyle: { background: '#1976d2', color: '#FFFFFF' },
  // headerStyle: { background: '#f8d117', color: '#215197' },
};

export default Table;
