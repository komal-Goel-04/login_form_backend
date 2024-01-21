const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        default: 1234567,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    confirmpassword : {
        type: String,
        required: true
    }

})


//to create a collection
const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;