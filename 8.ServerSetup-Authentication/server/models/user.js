/* User database model */
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining our model 
const userSchema = new Schema({
    email: { 
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// Create the model class 
const ModelClass = mongoose.model('user', userSchema);

// Export the schema
module.exports = ModelClass;