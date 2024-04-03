import balanceRequestModel from "../model/balanceRequestModel.js";

export const balanceRequestController = async (req, res) => {
    try {
      const { username, trx,amount } = req.body;


      if (!username) {
        return res.send({ error: "username is required" });
      }
      if (!trx) {
        return res.send({ error: "transaction id is required" });
      }
      if (!amount) {
        return res.send({ error: "amount is required" });
      }
  
     

      const result = await new balanceRequestModel({
      
        username,
        trx,
        amount
       

      }).save();
      res.send({
        success: true,
        message: "Add Balance Request Sent Successfuly ",
        result,
      });
    } catch (error) {
      res.send({
        success: false,
        message: "Error In Adding Balance Request",
        error,
      });
    }
  };