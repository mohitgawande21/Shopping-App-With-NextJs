import User from "../../models/User";
import connectDB from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
    const userCheck = await User.findOne({
        email: req.body.email,
    })
    if (req.method === 'POST') {
        if(req.body.email === userCheck?.email){
            res.status(400).json({ error: 'User Alredy Exist' })
            return;
        }else{
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, 'not()@!#secret%3336').toString(),
    
            })
            await user.save()
            res.status(200).json({ success: 'success' })
        }

    } else {
        res.status(400).json({ error: 'Bad Request' })

    }


}
export default connectDB(handler)