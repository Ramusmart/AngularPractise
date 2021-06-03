import * as express from 'express';
import * as mongodb from 'mongodb';

let mongoClient = mongodb.MongoClient;
let url = "mongodb://ssiOffline:5510ff1in3@dev0-shard-00-00.aar2e.mongodb.net:27017/test?ssl=true&replicaSet=dev0-shard-0&authSource=admin&retryWrites=true&w=majority";
let collectionName = "geoCountCanada_20210526";
let dbName = "b2b";

let acModule = express.Router().get("/",(req,res)=>{
    mongoClient.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db(dbName);
            db.collection(collectionName).find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }

    })
});

export default acModule;