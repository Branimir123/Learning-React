import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const validate = values => {
    const errors = {};
  
    if(!values.email) {
        errors.email = "You have to provide an email";
    }

    if(!values.password) {
        errors.password = "You have to provide a password";
    }

    if(values.password < 8){
        errors.password = "Password must be at least 8 characters";
    }

    if(values.password != values.passwordConfirm){
        errors.passwordConfirm = "Passwords doesn't match";
    }

    return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class Signup extends Component {
    render () {
        //const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

        return (
            <form>
                <Field name="email" type="text" component={renderField} label="Age"/>
                <Field name="password" type="password" component={renderField} label="Password"/>
                <Field name="passwordConfirm" type="password" component={renderField} label="PasswordConfirm"/>            
                <button action="submit" className="btn btn-primary">Sign up</button>
            </form>
        );
    }
}

export default Signup = reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
})(Signup);

Signup = connect(null, null)(Signup);