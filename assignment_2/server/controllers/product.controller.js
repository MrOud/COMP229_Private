import extend from 'lodash/extend.js'
import Product from '../models/product.model.js'

const create = async (req, res) => {
    console.log("create product")
    const product = new Product(req.body)
    try {
        await product.save()

        return res.status(200).json({
            message: "Product added successfully"
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ 
            error: "Could not add product"
        })
    }
}

const list = async (req, res) => {
    console.log("list: " + req.query.name)
    if (req.query.name === undefined) {
        try {
            let products = await Product.find().select("name description category price quantity")
            res.json(products)
        } catch (err) {
            return res.status(400).json({
                error: "Could not find product"
            })
        }
    } else {
        try {
            let products = await Product.find({"name": req.query.name})
            res.json(products)
        } catch (err) {
            return res.status(400).json({
                error: "Could not find product"
            })
        }
    }

}

const remove = async (req, res) => {
    console.log(" Remove")
    try {
        let product = req.profile
        let deletedProduct = await product.deleteOne()
        res.json(deletedProduct)
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: "Could not delete product"
        })
    }
}

const removeAll = (req, res) => {
    console.log("removeAll")
}
const read = (req, res) => {
    console.log("Read")
}
const update = (req, res) => {
    console.log("Update")
}


const productById = async (req, res, next, id) => {
    console.log("pById: " + id)
    try {
        let product = await Product.findById(id)

        if (!product) return res.status(400).json({
            error: "Could not find product"
        })

        req.profile = product
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve product"
        })
    }
}

export default { create, productById, read, list, remove, removeAll, update }