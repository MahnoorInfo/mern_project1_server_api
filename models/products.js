import mongoose from "mongoose";

const { Schema, model, ObjectId } = mongoose;

const productSchema = new Schema({

title: {
   type: String,
   required : true,
   minLength : 5,
   maxLength: 100
},

subTitle: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100
},

price: {
    type : Number ,
    required: true
},

category: {
    type: String,
    required:true
},

brand: {
    type: String,
    required : true
},
 
description: {
    type: String,
    required: true
},

images: [{}],

reviews : [{}],

noOfReviews: {
    type: Number,
    required: true,
    default: 0
},

stock: {
    type: Number,
    required: true,
    default: 0
},


onSale: {
    type: Boolean,
    default: false
     
},

rating: {
    type: Number,
    required: true,
    default: 5
},

discount: {
    type: Number,
    required: false,
    default: 0
},

isNewProduct: {
    type: Boolean, default: false
},

isSold: {
    type: Boolean, default: false
}

} , {timestamps : true} );



const product = model("Product", productSchema);

export default product;
