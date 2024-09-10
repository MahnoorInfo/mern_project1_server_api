
import express from 'express';
import productRoutes from './routes/produts.js';
import dbConfig from './config/dbConfig.js';
import * as config from './config/config.js';

const app = express();


/* pass route to middleware */
app.use("/api/products", productRoutes);


/* mongodb connection */
dbConfig();


/* run server on port */
app.listen(config.port, () => {
    console.log(`Express is running on port ${config.port}`);
})


