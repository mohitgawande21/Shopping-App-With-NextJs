import mongoose from 'mongoose'

const userSchmea = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type:String, required: true },

})

export default mongoose.models.User || mongoose.model('User', userSchmea)