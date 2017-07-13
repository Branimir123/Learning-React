import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
    renderField(field) {
        const { meta: { touched, error}, label, input} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label htmlFor="">{label}</label>
                <input 
                className="form-control"
                    type="text"
                    {...input}
                />
                <label className="text-help">{touched ? error : ''}</label>
            </div>
        );
    }

    onSubmit(values) {
        //Handle data submission here
        //console.log(values);
        this.props.createPost(values);

    }

    render() {
        const { handleSubmit } = this.props;

        return(
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
               />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
               />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
               />
               <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">
                    Back
                </Link>
           </form>
        );
    }
}

function validate(values) {
    // console.log(values) -> { title: 'sdf', categories: 'sdfs', content: 'sdfsdfdsgdfgsd'}
    const errors = {};

    // Validate the inputs from 'values'
    if(!values.title || values.title.length < 2){
        errors.title = "Title must be at least two characters";
    }

    if(!values.categories){
        errors.categories = "Enter categories";
    }

    if(!values.content || values.content.length < 60){
        errors.content = "Content must be at least 60 characters";
    }
    
    // If errors is empty, the form is fine to submit 
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate, // same as validate: validate
    form: 'PostsNewForm'
}) (
    connect(null ,{ createPost })(PostsNew)
);