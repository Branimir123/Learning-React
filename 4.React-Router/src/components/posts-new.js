import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderField(field) {
        return (
            <div className="form-group">
                <label htmlFor="">{field.label}</label>
                <input 
                className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
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
})(PostsNew);