import mongoose from "mongoose";

const { Schema, model, ObjectId } = mongoose;

const productSchema = new Schema({

title: {
   type: String, required : true, minLength : 5, maxLength: 500
},

subTitle: {
    type: String, required: true, minLength: 5, maxLength: 500
},

price: {
    type : Number , required: false
},

category: {
    type: String, required: false
},

brand: {
    type: String, required : false
},
 
description: {
    type: String, required: false
},

images: [{}],

reviews : [{}],

noOfReviews: {
    type: Number, default: 0
},

stock: {
    type: Number, default: 0
},

rating: {
    type: Number, default: 5
},

discount: {
    type: Number, default: 0
},

onSale: {
    type: Boolean, default: false
     
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
