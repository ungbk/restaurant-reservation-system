import mongoose from "mongoose";
import tableSchema from "./table";

export const daySchema = new mongoose.Schema({
    date: Date, 
    tables: [tableSchema]
});

export var day = mongoose.model("Day", daySchema);


