import Product from "../../models/Product";
import connectDB from '../../middleware/mongoose'
const handler = async (req, res) => {

    if (req.method === 'POST') {
        const product = new Product({
            title: req.body.title,
            slug: req.body.slug,
            desc: req.body.desc,
            catagory: req.body.catagory,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            availbaleQty: req.body.availbaleQty,
            img: req.body.img
        })
        await product.save()
        res.status(200).json({ success: 'success' })
    } else {
        res.status(400).json({ Error: 'Bad Request' })

    }


}
export default connectDB(handler)