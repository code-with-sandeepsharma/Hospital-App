import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        countInStock: req.body.countInStock,
        description: req.body.description,
    });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
