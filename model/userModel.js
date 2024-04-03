import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    iccid: {
      type: String,
      required: true,
    },
  
    password: {
      type: String,
      required: true,
      trim: true,
    },
    balance: {
        type: String,
        required: true,
       default: "0"
      },
      status: {
        type: String,
        required: true,
       default: "inactive"
      },


  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
