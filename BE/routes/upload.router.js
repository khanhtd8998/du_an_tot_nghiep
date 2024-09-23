import { Router } from "express";
import { uploadImages } from "../controllers/image.controller.js";
import cloudinary from "../config/cloudinaryConfig.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const router = Router();
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "upload",
        format: "jpg"
    },

});
const upload = multer({ storage: storage });

router.post("/upload", upload.array("images", 5), uploadImages)




export default router;