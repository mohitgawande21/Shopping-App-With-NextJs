import mongoose from 'mongoose'

const Schmea = new mongoose.Schema({

    title: { type: String, },
    slug: { type: String, },
    desc: { type: String, },
    catagory: { type: String, },
    size: { type: String, },
    color: { type: String, },
    price: { type: Number, },
    availbaleQty: { type: Number, },
    img: {}

})


export default mongoose.models.Product || mongoose.model("Product", Schmea);




