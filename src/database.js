import mongoose, { mongo, Mongoose } from "mongoose";

const url = `mongodb://localhost:27017/coffee-crud`;


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})