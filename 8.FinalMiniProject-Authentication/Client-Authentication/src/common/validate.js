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

export default validate;