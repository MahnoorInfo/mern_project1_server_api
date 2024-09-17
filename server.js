
import express from 'express';

import DBConfig from './config/DBConfig.js';
import * as config from './config/config.js';
import productRoutes from './routes/products.js';

/* important middlewares */
import cors from 'cors';
import morgan from 'morgan';


const port = config.port || 9090;
const app = express();

app.use(cors());
app.use(morgan('dev'));   /** use morgan for logging */
app.use(express.json()); 

/* pass route to middleware */
app.use("/api/products", productRoutes);

DBConfig();      /* mongodb connection */

/* run server on port */
app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
})


  