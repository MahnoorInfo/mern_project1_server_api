
import mongoose from 'mongoose';
import * as config from './config.js';


const DatabaseConfig = () => {
    mongoose.connect(config.MONGOODB_CLOUD)
    .then( (conn) => { console.log( ` database connected ${conn.connection.host}` ) } )
    .catch( () => { console.log( ' database connection failed ' ) } )
}


export default DatabaseConfig;    