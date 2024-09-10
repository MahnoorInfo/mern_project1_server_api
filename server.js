
import express from 'express';
import productRoutes from './routes/produts.js';
import dbConfig from './config/dbConfig.js';
import * as config from './config/config.js';

const app = express();
const port = config.port || 9090;


/* pass route to middleware */
app.use("/api/products", productRoutes);


/* mongodb connection */
dbConfig();


/* run server on port */
app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
})


