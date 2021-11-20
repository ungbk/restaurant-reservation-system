import mongoose from "mongoose";

export const reservationSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    guests: Number,
});

export const reservation = mongoose.model("Reservation", reservationSchema);
