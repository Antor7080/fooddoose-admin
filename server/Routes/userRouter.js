const userRouter = require("express").Router({ caseSensitive: true });
const isAuthenticated = require('../Middleware/common/isAuthenticate')
const {
<<<<<<< HEAD
  userRegisterController,
  userLoginController,
  userLogoutController,
  userUpdateController,
  refreshToken,
  getAllUserDataController,
  getSingleUserData,
  createAccessToken,
  createRefreshToken,
=======
    userRegisterController,
    userLoginController,
    userLogoutController,
    userUpdateController,
    refreshToken,
    getAllUserDataController,
    getSingleUserData,
    isAuthenticate

>>>>>>> Antor
} = require("../Controller/userController");
const { upload } = require("../Middleware/common/singleFileUpload");
const {
  userEditValidator,
  userEditValidatorErrorHandler,
} = require("../Middleware/validator/userEditValidator");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../Middleware/validator/userValidator");
const {
  updateUserValidators,
  updateUserValidationHandler,
} = require("../Middleware/validator/userValidator");
// const auth = require("../Middleware/auth");

userRouter.post(
  "/register",
  upload.single("logo"),
  addUserValidators,
  addUserValidationHandler,
  userRegisterController
);
userRouter.post("/login", userLoginController);
userRouter.put("/update/:id", isAuthenticated, upload.single("logo"), userUpdateController);
userRouter.post('/logout', userLogoutController)
userRouter.get('/all-user', getAllUserDataController)
userRouter.post('/refreshToken', refreshToken);
userRouter.get('/single-user-info/:id', getSingleUserData)
userRouter.get('/isAuthenticate', isAuthenticated, isAuthenticate)


module.exports = userRouter;
