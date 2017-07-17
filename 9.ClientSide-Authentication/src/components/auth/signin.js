import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
//import { signinUser } from '../../actions'; 

class Signin extends Component{
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        // TODO: Something to log user in 
        this.props.signinUser({ email, password});
    }

    render() {
        const { handleSubmit,  fields = { email, password }} = this.props;

        return (
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" className="form-control" type="text"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component="input" className="form-control" type="text"/>
                </fieldset>
                <button className="btn btn-primary" action="submit">Sign in</button>
            </form>
        );
    }
}

Signin = reduxForm({
    form: 'signin',
    fields: [ 'email', 'password' ] 
})(Signin);

export default Signin = connect(null, actions)(Signin);