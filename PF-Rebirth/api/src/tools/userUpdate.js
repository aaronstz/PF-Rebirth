const bcrypt = require("bcrypt");
const { User } = require("../db");

const updateUser = async (req, res, next) => {
  const { mail } = req.params;
  const {
    formBasicUserName,
    formBasicName,
    formBasicLastName,
    formBasicPassword,
    formBasicImage,
    formBasicMail,
  } = req.body;
  try {
    const user = await User.findOne({
      where: { mail: mail },
    });
    if (!user)return res.status(404).send("No existe ningun usuario con ese mail");
    if (formBasicUserName) await user.update({ userName: formBasicUserName });
    if (formBasicName) await user.update({ name: formBasicName });
    if (formBasicLastName) await user.update({ lastName: formBasicLastName });
    if (formBasicPassword)await user.update({ password: await bcrypt.hash(formBasicPassword, 10) });
    if (formBasicImage) await user.update({ image: formBasicImage });
    if (formBasicMail)await User.update({ mail: formBasicMail }, { where: { mail: mail } });
    res.send("User modified");
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUser };
