import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'A category must to have a name !'],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    coverImg: {
        type: String,
        required: [true, 'A product must have a image'],
    },
    ratingAverage: {
        type: Number,
        require: false,
        default: 0,
    },
    variants: [
        {
            color: {
                type: String,
                required: true,
            },
            sizes: [
                {
                    nameSize: {
                        type: String,
                        required: true,
                    },
                    price: {
                        type: Number,
                        required: true,
                    },
                    inventory: {
                        type: Number,
                        required: true,
                        min: 0,
                    },
                    images: [String],
                },
            ],
        },
    ],

    ratingQuantity: {
        type: Number,
        required: false,
        default: 0,
    },
    description: {
        type: String,
        required: [true, 'A product must have a description'],
    },
    status: {
        type: String,
        enum: ['Available', 'OutOfStock', 'Disabled'],
        default: 'Available',
    },

}, { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema)
