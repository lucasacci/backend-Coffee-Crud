import mongoose, { mongo, Mongoose } from "mongoose";

// const url = `mongodb://localhost:27017/coffee-crud`;
const url = `mongodb+srv://jony:nDXq7Hu1kLQLLA4d@clustercomision7i.3qcgclh.mongodb.net/cafe-benitos-santos`;


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})