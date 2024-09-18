import Product from "../models/products.js";


/**
 * 
 *  fetch all products
 *  => GET /api/products
 */
const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products, count: products.length})
  }
  catch (err) {
    res.status(400).json({
      error: 'All products not found'
    })
  }
}


/**
 * 
 * fetch single product by id
 * => GET /api/products/param=id
 */
const fetchProduct = async (req, res) => {
  try {
     const productId = req.params.id;
     const productById = await Product.findById(productId);
     productById && res.status(200).json({ success: true, data: productById})
  }
  catch (err) {
    res.status(400).json({ error : 'product not found'})
  }
}


/**
 * 
 *   add new product , isAdmin : true , loggedIn : true
 *   => POST /api/products 
 */ 

const addProduct = async (req,res) => {
  try{
//  console.log(req.body.title);
    const { title,  subTitle, description, brand, price, category } = req.body;

     const addNewProduct = await new Product({title, subTitle, description, brand, price, category}).save();
     res.status(201).json({success:true, data: addNewProduct});
  }
  catch(error){
   res.status(201).json({error:"product did not added"})
  }
}



export { fetchProducts, fetchProduct, addProduct }

