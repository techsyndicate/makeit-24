const mongoose = require('mongoose');
const reqString = { type: String, required: true };

const userSchema = mongoose.Schema({
    name: reqString,
    email: reqString,
    password: reqString,
    createdOn: {
        type: String,
        required: true
    },
    pass:{type: Boolean, default: false},
    passDuration: {type: String, required: false, default: 'none'},
    passDate: {type:Date, required: false, default: null}
})

module.exports = mongoose.model("User", userSchema)