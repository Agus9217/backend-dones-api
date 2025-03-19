import { connect } from "mongoose";
import { MONGO_URI } from "../env";

export const connectDb = async () => { 
  
  const uri = MONGO_URI;

  try {
    connect(uri)
    console.log('###### DB Connected ######');
  } catch (error) {
    console.log('###### DB Connection Error ######');
    console.log(error);
  }
}