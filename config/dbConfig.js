
import mongoose from 'mongoose';


const MONGOODB_CLOUD = "mongodb+srv://admin:12345@clustermern.khmp5.mongodb.net/mern_db"

const dbConfig = () => {
    mongoose.connect(MONGOODB_CLOUD)
    .then( () => { console.log( ' database connected ' ) } )
    .catch( () => { console.log( ' database connection failed ' ) } )
}


export default dbConfig;    