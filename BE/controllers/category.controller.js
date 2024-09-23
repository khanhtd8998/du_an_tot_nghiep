import Category from "../models/category.modle.js"
import { StatusCodes } from "http-status-codes"
import Product from "../models/product.modle.js"




export const create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(StatusCodes.CREATED).json(category);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export const getAll = async (req, res) => {
    try {
        const categoies = await Category.find({});
        if (categoies.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "khong co danh muc nao" });
        }
        return res.status(StatusCodes.OK).json(categoies);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.id });
        const category = await Category.findById(req.params.id);
        if (category.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "khong co dnah muc nao" });
        }
        return res.status(StatusCodes.OK).json({
            category,
            products,
        });


    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export const deleteCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};

export const updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(StatusCodes.OK).json(category);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
};
