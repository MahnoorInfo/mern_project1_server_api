
import express from 'express';
import * as prod from '../controllers/products.js';


const productRoutes = express.Router();

productRoutes.route('/').get(prod.fetchProducts);
productRoutes.route('/').post(prod.addProduct);
productRoutes.route('/:id').get(prod.fetchProduct);


//productRoutes.get('/', fetchProducts)

export default productRoutes














// some practice code

/* For binary data show in text and spreadsheet 

   header setting by default
   content-type = application/octel-stream
*/
productRoutes.get('/binary', (req, res) => {

    const buffer = Buffer.from('Hello - world', 'utf-8');
    res.send(buffer);
});


