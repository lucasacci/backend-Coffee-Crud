import mongoose, { mongo, Mongoose } from "mongoose";

// const url = `mongodb://localhost:27017/coffee-crud`;
const url = `mongodb+srv://Lucasacci:qliadademierda@cluster0.l5htrji.mongodb.net/cafe-benito-santos`;


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})