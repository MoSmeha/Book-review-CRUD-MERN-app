import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);

    console.log(`connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`not connected ${error.message}`);
    process.exit(1);
  }
};
