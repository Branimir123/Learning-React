import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import validate from '../../common/validate';

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
    handleFormSubmit(formProps) {
        // Call action creator to sign up the user
        this.props.signupUser(formProps);
    }

    renderAlert = () => {
            if (this.props.errorMessage){
                return <div className="alert alert-dange"><strong>Oops!</strong>{this.props.errorMessage}</div>
            }
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

        return (
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                <Field name="email" type="text" component={renderField} label="Age"/>
                <Field name="password" type="password" component={renderField} label="Password"/>
                <Field name="passwordConfirm" type="password" component={renderField} label="PasswordConfirm"/>            
                <button action="submit" className="btn btn-primary">Sign up</button>
                {this.renderAlert()}
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signup = reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
})(Signup);

export default Signup = connect(mapStateToProps, actions)(Signup);