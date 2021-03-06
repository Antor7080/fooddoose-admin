const bannerRouter = require("express").Router({ caseSensitive: true });
const {
  addBannerPostController,
  getAllBanner,
  getSingleBanner,
  updateBanner,
  deleteBanner,
} = require("../Controller/bannerController");
const isAdmin = require("../Middleware/common/isAdmin");
const isAuthenticate = require("../Middleware/common/isAuthenticate");
const { upload } = require("../Middleware/common/singleFileUpload");
const {
  bannerValidator,
  bannerValidatorHandler,
} = require("../Middleware/validator/bannerValidator");

bannerRouter.post(
  "/add-banner",
  isAuthenticate,
  isAdmin,
  upload.single("image"),
  bannerValidator,
  bannerValidatorHandler,
  addBannerPostController
);
bannerRouter.get("/all-banner", getAllBanner);
bannerRouter.get("/single-banner/:bannerId", getSingleBanner);
bannerRouter.put(
  "/update/:bannerId",
  upload.single("image"),
  isAuthenticate,
  isAdmin,
  updateBanner
);
bannerRouter.delete("/delete/:bannerId", isAuthenticate, isAdmin, deleteBanner);

module.exports = bannerRouter;
