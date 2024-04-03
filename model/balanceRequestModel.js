import mongoose from "mongoose";

const balanceRequestSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    trx: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
   

  },
  { timestamps: true }
);

export default mongoose.model("balancerequest", balanceRequestSchema);
