import mongoose from "mongoose"

mongoose.connect("mongodb+srv://DevJourneyLog:Developer317297@cluster0.985xdqp.mongodb.net/Dashboard_Products");
let db = mongoose.connection;



export default db;