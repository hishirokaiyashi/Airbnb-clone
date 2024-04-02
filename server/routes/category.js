const router = require("express").Router();
const categoryController = require("../controller/category");
const { verifyAccessToken } = require("../middlewares/verifyToken");

router.use(verifyAccessToken);
router.get("/getAllCategories", categoryController.getAllCategories);
router.get("/getCategoryById/:cId", categoryController.getCategoryById);
router.post("/createCategory", categoryController.createCategory);
router.put("/updateCategoryById/:cId", categoryController.updateCategory);
router.delete("/deleteCategoryById/:cId", categoryController.deleteCategoryById);

module.exports = router;