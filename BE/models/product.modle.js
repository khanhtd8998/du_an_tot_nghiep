import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }


}, { timestamps: true, versionKey: false }
);
export default mongoose.model("Product", productSchema)
