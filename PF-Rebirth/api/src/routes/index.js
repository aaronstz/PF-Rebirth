const { Router } = require("express");
// const ownersRoute = require("./owners.js");
const petsRoute = require("./pets.js");
const userRoute = require("./user.js");
// const chatRoute = require("./chat.js");
// const requestRoute = require("./request.js");
// const requesIdtRoute = require("./request.js");
const successStoriesRoute = require("./successStories.js");
// const adminRoute = require("./admin.js");
const cors = require("cors");

const router = Router();
router.use(cors());

// router.use("/owners", ownersRoute);
router.use("/pets", petsRoute);
router.use("/user", userRoute);
// router.use("/chat", chatRoute);
// router.use("/c/:idhat", chatRoIdute);
// router.use("/request", requestRoute);
router.use("/successStories", successStoriesRoute);
// router.use("/admin", adminRoute);

module.exports = router;
