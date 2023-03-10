import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/codeswear')
    return handler(req, res);
  } catch (err) {
    console.log('db error', err)
  }
}

export default connectDB;

