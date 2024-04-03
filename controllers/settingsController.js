import settingsModel from "../model/settingsModel.js";


export const getSettingsController = async (req, res) => {
  try {
    const result = await settingsModel.find({});

    if (!result) {
      return res.send({
        success: false,
        message: "Do not have any Settings Info",
      });
    } else {
        const data = result[0]

      res.send({
        success: true,
        message: "Settings Info fetched successfully",

        data,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "error in fetching Settings Info",
    });
  }
};
