// @ts-nocheck
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

console.log(process.env.MONGODB_CLUSTER_ADDRESS);
console.log(process.env.PORT);

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/exemple?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri);

console.log(uri);

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
