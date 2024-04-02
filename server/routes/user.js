const router = require("express").Router();
const userController = require("../controller/user");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.get("/forgotpassword", userController.forgotPassword);

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.put("/refreshToken", userController.refreshAccessToken);

router.put("/reset-password", userController.resetPassword);

router.use(verifyAccessToken);
router.get("/current", userController.getUserByToken);
router.get("/getAllUsers", isAdmin, userController.getAllUsers);
// router.get("/getUserById/:uId", userController.getUserById);
router.put(
  "/updateCurrentUserByAdmin/:uid",
  isAdmin,
  userController.updateUserByAdmin
);
router.put("/updateCurrentUser", userController.updateUser);
router.delete("/deleteUserById", isAdmin, userController.deleteUserById);

module.exports = router;
