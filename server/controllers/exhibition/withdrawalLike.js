const { likes } = require("../../models");
const { Op } = require("sequelize");
module.exports.withdrawalLike = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (userInfo) {
    const { postId: exhibition_id } = req.params;
    const { id: user_id } = userInfo;
    res.status(200).json({ message: "ok" });
    // const result = await likes.destroy({  where: {
    //   [Op.and]: [
    //     { exhibition_id },
    //     { user_id }
    //   ]
    // }});

    //   if (result) {
    //     res.status(200).json({
    //       message: "successfully delete like",
    //     });
    //   }
    // } else {
    //   res.status(401).json({
    //     message: "invalid user",
    //   });
  }
};
