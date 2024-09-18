
import express from 'express';

import DatabaseConfig from './config/DatabaseConfig.js';
import * as config from './config/config.js';
import productRoutes from './routes/products.js';

/* important middlewares */
import cors from 'cors';
import morgan from 'morgan';


const port = config.PORT || 9090;
const app = express();

app.use(cors());
app.use(morgan('dev'));   /** use morgan for logging */
app.use(express.json()); 

app.use("/api/products", productRoutes);    /* pass route to middleware */

DatabaseConfig();    /* mongodb connection */

app.listen(port, () => {    /* run server on port */
    console.log(`Express is running on port ${port}`);
})


  