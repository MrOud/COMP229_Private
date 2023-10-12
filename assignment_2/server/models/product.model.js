import mongoose from "mongoose"

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Product name is required"
    },
    description: {
        type: String,
        trim: true,
        required: "Product description is required"
    },
    price: {
        type: Number,
        required: "Product price is required"
    },
    quantity: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: "Product requires a category"
    }
})

export default mongoose.model('Product', ProductSchema)