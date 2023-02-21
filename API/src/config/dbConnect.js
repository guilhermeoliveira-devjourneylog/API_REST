import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Developer:Developer317297@cluster0.en5qfwo.mongodb.net/dashboard-products");
let db = mongoose.connection;



export default db;