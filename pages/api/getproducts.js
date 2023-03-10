import Product from "../../models/Product";
import connectDB from '../../middleware/mongoose'
const handler = async (req, res) => {
    if (req.method == 'GET') {
        const products = await Product.find()
        res.status(200).json({ products })
    } else {
        res.status(400).json({ Error: 'Bad Request' })

    }

}
export default connectDB(handler)