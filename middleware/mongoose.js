import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    return handler(req, res);
  } catch (err) {
    console.log('db error', err)
  }
}

export default connectDB;

