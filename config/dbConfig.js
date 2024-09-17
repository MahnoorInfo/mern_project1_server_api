
import mongoose from 'mongoose';
import * as config from './config.js';


const DBConfig = () => {
    mongoose.connect(config.MONGOODB_CLOUD)
    .then( () => { console.log( ' database connected ' ) } )
    .catch( () => { console.log( ' database connection failed ' ) } )
}


export default DBConfig;    