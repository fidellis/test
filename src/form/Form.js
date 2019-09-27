import React, { Component } from 'react';
import Form, { Button } from 'form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const msg = msg => dispatch => dispatch({ type: 'SUCCESS', msg });

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
  }

  onSubmit(p) {
    this.setState({ submited: true }, () => (this.state.isValid ? this.props.onSubmit(p) : null));
  }

  onClickAction({ onClick, ...params }) {
    onClick({
      ...params,
      message: (message, callback) => {
        if (message) this.props.msg(message);
        if (callback) callback();
      } });
  }

  render() {
    const { children, actions, ...props } = this.props;
    const { isValid, submited } = this.state;

    return (
      <Form
        {...props}
        isValid={isValid => this.setState({ isValid })}
        submited={this.state.submited}
        actions={[
          {
            id: 'submit',
            label: 'Salvar',
            onClick: this.onSubmit,
            disabled: !isValid && submited,
          },
        ].concat(actions.map(action => ({ ...action, onClick: () => this.onClickAction(action) })))}
      >
        {children}
      </Form>

    );
  }
}

Formulario.propTypes = {};

Formulario.defaultProps = {
  actions: [],
  width: '100%',
};

// export default connect(() => {}, { msg })(Formulario);
export default Formulario;
