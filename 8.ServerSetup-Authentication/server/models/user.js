/* User database model */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

// Defining our model 
const userSchema = new Schema({
    email: { 
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// On save hook encrypt password 
// Function run before saving method
userSchema.pre('save', (next) => {
    const user = this;

    // Generating salt then run callback
    bcrypt.genSalt(10, (err, salt) => {
        if(err){
            return next(err);
        }

        // Hash the password using the salt and again run callback
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err){
                return next(err);
            }        
            // Overwrite plain text password with hashed one
            user.password = hash;
            next();
        });
    });
});

// Create the model class 
const ModelClass = mongoose.model('user', userSchema);

// Export the schema
module.exports = ModelClass;