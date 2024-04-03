import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
      const { name, phone, password } = req.body;

      console.log(name,phone,password);
      //validations
      if (!name) {
        return res.send({ error: "name is required" });
      }
      if (!phone) {
        return res.send({ error: "phone number is required" });
      }
  
     
      if (!password) {
        return res.send({ error: "password is required" });
      }
  
      //register user
      // const hashedPassword = await hashPassword(password);
      //save

      const iccid = Math.floor(100000 + Math.random() * 900000)
      const user = await new userModel({
        name,
        phone,
        iccid,
       
        password,

      }).save();
      console.log(user);
      res.send({
        success: true,
        message: "Registraion Successfull",
        user,
      });
    } catch (error) {
      res.send({
        success: false,
        message: "Error In Registration",
        error,
      });
    }
  };



  export const loginController = async (req, res) => {
    try {
      const { phone, password } = req.body;
      if (!phone) {
        return res.send({ error: "Phone Number is required" });
      }
      if (!password) {
        return res.send({ error: "Password is required" });
      }
  
      //check user
      const user = await userModel.findOne({ phone });
      if (!user) {
        return res.send({
          success: false,
          message: "User Is Not Registered",
        });
      }


      // const match = await comparePassword(password, user.password);
      if (password!==user.password) {
        return res.send({
          success: false,
          message: "The Password Is Wrong",
        });
      }
  
      //token
      // const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.send({
        success: true,
        message: "Login Successfull",
        user: {
          name: user.name,
          phone: user.phone,
          balance: user.balance,
          status: user.status
        },
      });
    } catch (error) {
     
      res.send({
        success: false,
        message: "Error In login",
        error,
      });
    }
}


export const fetchUserController = async (req, res) => {
  try {
    const { phone } = req.body;
    //validations
 
    if (!phone) {
      return res.send({ error: "Phone is required" });
    }



    //register user
    // const hashedPassword = await hashPassword(password);
    //save


    const user = await userModel.findOne({ phone });
    if (!user) {
      return res.send({
        success: false,
        message: "User Is Not Registered",
      });
    }

    res.send({
      success: true,
      message: "Found User",
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error In fetching User",
      error,
    });
  }
};