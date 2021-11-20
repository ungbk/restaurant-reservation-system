import mongoose from "mongoose";
import reservationSchema from "./reservation";

export const tableSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    availability: Boolean, 
    reservation: {
        type: reservationSchema,
        required: false 
    }
});

export var table = mongoose.model("Table", tableSchema);
