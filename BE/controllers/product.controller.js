import Product from "../models/product.modle.js"
import { StatusCodes } from "http-status-codes";



export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(StatusCodes.CREATED).json(product);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export const getAll = async (req, res) => {
    try {
        const product = await Product.find({});
        if (product.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "khong co sp muc nao" });
        }
        return res.status(StatusCodes.OK).json(product)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(StatusCodes.OK).json(product)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json(product)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(StatusCodes.OK).json(product)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
} 