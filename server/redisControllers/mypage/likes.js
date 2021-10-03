/**
 * SELECT exhibition_id
 * FROM likes
 * WHERE user_id = userInfo.id
 *
 *
 * SELECT *
 * FROM exhibition
 * WHERE id in ()
 */

const { likes, exhibition } = require("../../models");
const { isAuthorized } = require("../../utils/tokenFunction");
module.exports.getMyLikes = async (req, res) => {
  const userInfo = isAuthorized(req);

  const { id: user_id } = userInfo;

  const result = await likes.findAll({
    attributes: ["exhibition_id"],
    where: {
      user_id,
    },
  });

  const exhibition_ids = result.map((el) => el.dataValues.exhibition_id);

  const myexhibition = await exhibition.findAll({
    where: {
      id: exhibition_ids,
    },
  });
  const data = myexhibition.map((el) => el.dataValues);
  res.status(200).json({ data });
};