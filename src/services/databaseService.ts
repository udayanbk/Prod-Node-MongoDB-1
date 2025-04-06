import mongoose from "mongoose"
import config from "../config/config"

export default {
  connect: async ()=>{
    try {
      await mongoose.connect(config.DB_URL as string)
      return mongoose.Connection;
    }
    catch (err) {
      throw err;
    }
  }
}