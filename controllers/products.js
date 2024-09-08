import product from "../models/products.js";


/**
 * 
 *  fetch all products
 */
const fetchProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json({ success: true, data: products})
  }
  catch (err) {
    res.status(400).json({
      error: 'All products not found'
    })
  }
}


/**
 * 
 * fetch single product
 */
const fetchProduct = async (req, res) => {
  try {
     const productId = req.params.id;
     const productById = await product.findById(productId);
     productById && res.status(200).json({ success: true, data: productById})
  }
  catch (err) {
    res.status(400).json({ error : 'product not found'})
  }
}



export { fetchProducts, fetchProduct }

