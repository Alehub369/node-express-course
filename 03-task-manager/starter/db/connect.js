import mongoose from "mongoose";


const connectDB = async () => {

  await mongoose.connect(process.env.MONGO_URI).then ((res) => {
      
      console.log("Mongo DB connected successfully");
      
  })
}


export default connectDB

