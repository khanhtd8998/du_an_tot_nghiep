import { StatusCodes } from "http-status-codes";
import cloudinary from "../config/cloudinaryConfig.js"

export const uploadImages = async (req, res) => {
    try {
        const images = req.files.map(file => file.path)
        const uploadedImage = [];

        for (let image of images) {
            const results = await cloudinary.uploader.upload(image);
            console.log(results);
            uploadedImage.push({
                url: results.secure_url,
                publicId: results.public_id,
            });
        }
        return res.status(200).json({
            message: "Upload images successfully",
            datas: uploadedImage,
        })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
}