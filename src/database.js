import mongoose, { mongo, Mongoose } from "mongoose";

// const url = `mongodb://localhost:27017/coffee-crud`;
const url = `mongodb+srv://lucasacci:RMfXXIF1ka3l487h@clustercafecrud.1ovnlam.mongodb.net/cafeDBcrud`;


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})