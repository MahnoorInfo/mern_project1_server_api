import mongoose from 'mongoose';

const { Schema, model, objectId } = mongoose; 

const usersSchema = new Schema({
    first_name :{
        type: String, default:''
    },
    last_name:{
        type: String, default:''
    },
    email:{
        type: String, required: true, unique: true, lowercase: true
    },
    password: {
        type: String, required: true
    },
    username:{
        type: String, required: true, unique: true, lowercase: true
    },
    profile_picture : {},
    role : {
        type : [String], default:'buyer'   /** role type is array here and default set to buyer */
    },
    isAdmin:{
        type: Boolean , default: false
    },
    address:{
        type: String, default: ""
    },
    country:{
        type: String, default:""
    },
    phoneNo:{
        type: String, default:""
    }
}, { timesstamps : true });

const users = model('User', usersSchema);

export default users;