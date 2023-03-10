import mongoose from 'mongoose'

const orderSchmea = mongoose.Schema({

    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String },
            quantity: { type: Number, default: 1 }
        }
    ],
    address: { type: String },
    amount: { type: Number }
})

export default mongoose.model('order', orderSchmea)