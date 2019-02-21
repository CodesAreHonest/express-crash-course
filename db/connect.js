import Mongoose from 'mongoose';
import config from '../core/config';

Mongoose.Promise = global.Promise;

const {dbHost, dbPort, dbName} = config;

const connect = async () => {

    try {
        await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`,{
            useMongoClient: true,
            useNewUrlParser: true, 
        });
    }
    catch (err) {
        console.log (`Cannot connect to MongoDB: ${err}`)
    }
}

export default connect;