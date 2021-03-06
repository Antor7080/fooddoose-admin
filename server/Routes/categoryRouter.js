const categoryRouter = require("express").Router({ caseSensitive: true });
const {
  categoryPostController,
  allCategoryGetController,
  deleteCategoryController,
  singleCategoryGetController,
  updateCategoryController,
} = require("../Controller/categoryController");
const isAuthenticate = require("../Middleware/common/isAuthenticate");
const { upload } = require("../Middleware/common/singleFileUpload");
const {
  categoryEditValidators,
  categoryEditValidationHandler,
} = require("../Middleware/validator/categoryEditValidator");
const {
  categoryValidators,
  categoryValidationHandler,
} = require("../Middleware/validator/categoryValidator");

categoryRouter.post(
  "/new-category",
  isAuthenticate,
  upload.single("image"),
  categoryValidators,
  categoryValidationHandler,
  categoryPostController
);
categoryRouter.get("/all-category", isAuthenticate, allCategoryGetController);
categoryRouter.get(
  "/single-category/:id",
  isAuthenticate,
  singleCategoryGetController
);
categoryRouter.delete("/delete/:id", isAuthenticate, deleteCategoryController);
categoryRouter.put(
  "/update/:id",
  isAuthenticate,
  categoryEditValidators,
  categoryEditValidationHandler,
  updateCategoryController
);

module.exports = categoryRouter;
