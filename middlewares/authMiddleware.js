import JWT from "jsonwebtoken";


//protected routes token base

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    req.user = decode;
    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "user is not logged in",
    });
  }
};

// export const requireAdminSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );

//     console.log(decode);

//     const admin = await adminModel.findById(decode._id);
//     if (admin) {
//       if (admin.status === "success") {
//         next();
//       } else {
//         return res.status(401).send({
//           success: false,
//           message: "Can not access without an Admin",
//         });
//       }
//     } else {
//       return res.status(401).send({
//         success: false,
//         message:
//           "The Authorization Token is invalid  because the account was deleted",
//       });
//     }

//     // req.user = decode
//     // next()
//   } catch (error) {
//     res.status(200).send({
//       success: false,
//       message: "Admin is not logged in",
//     });
//   }
// };


