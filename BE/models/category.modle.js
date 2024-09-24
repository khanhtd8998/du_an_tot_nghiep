import mongoose, { Schema } from "mongoose"


const categorySchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'A category must to have a name !'],
        },
    }, {
    timestamps: true, versionKey: false
}
);
export default mongoose.model("Category", categorySchema);