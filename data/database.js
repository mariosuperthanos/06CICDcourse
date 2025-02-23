// @ts-nocheck
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

console.log(`dbPassword: ${dbPassword}`);
console.log(`dbUser: ${dbUser}`);
console.log(`clusterAddress: ${clusterAddress}`);
console.log(`dbName: ${dbName}`);


const uri = `mongodb+srv://david1bargianu:IZSNk4qSavwqaCKE@cluster0.a6hho.mongodb.net/exemple?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
