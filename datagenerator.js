// datagenerator.js
import mongoose from "mongoose";

const daGeSchema = new mongoose.Schema({
    name: String,
    lang: String,
    city: String,
    salary: Number
});

export const DaGe = mongoose.model("DaGe", daGeSchema);
