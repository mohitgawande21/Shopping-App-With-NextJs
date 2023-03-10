import User from "../../models/User";
import connectDB from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const user = await User.findOne({
            email: req.body.email,
        })
        var bytes = CryptoJS.AES.decrypt(user?.password, 'not()@!#secret%3336');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        if ((req.body.email === user?.email) && (req.body.password === originalText)) {

            var token = jwt.sign({  name: user.name, email: user.email  }, 'jwttoken');

            res.status(200).json({ success: "success",token})
        } else {
            res.status(404).json({ error: "User Not Found", })
        }
    } else {
        res.status(404).json({ error: 'User Not Found' })

    }


}
export default connectDB(handler)