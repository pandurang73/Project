const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true // Ensure email uniqueness
    }
});

// Add Passport-Local Mongoose plugin for handling username and password fields
userSchema.plugin(passportLocalMongoose);

// Export the User model with a capital 'U'
module.exports = mongoose.model('User', userSchema);
