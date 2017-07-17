import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
    render () {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

        return (
            <form>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" {...email}/>
                </fieldset>   
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input type="text" className="form-control" {...password} type="password"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input type="text" className="form-control" {...passwordConfirm} type="password"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign up</button>
            </form>
        );
    }
}

Signup = reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm']
})(Signup);

export default Signup = connect(null, null)(Signup);