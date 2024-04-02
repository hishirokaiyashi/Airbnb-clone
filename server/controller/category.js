const Category = require("../models/category.model");
const asyncHandler = require("express-async-handler");

const getAllCategories = asyncHandler(async (req, res) => {
  const response = await Category.find();
  return res.status(200).json({
    success: response ? true : false,
    categories: response ? response : "Cannot get all categories",
  });
});

const createCategory = asyncHandler(async (req, res) => {
  const response = await Category.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    category: response ? response : "Cannot create new category",
  });
});

const updateCategory = asyncHandler(async (req, res) => {
  const { cId } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing inputs");

  const response = await Category.findByIdAndUpdate(cId, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    updatedCategory: response ? response : `Cannot update Category ${cId}`,
  });
});

const getCategoryById = asyncHandler(async (req, res) => {
  const { cId } = req.params;
  const Category = await Category.findById(cId);
  return res.status(200).json({
    sucess: Category ? true : false,
    category: Category ? Category : `Can't get Category by ${cId}`,
  });
});

const deleteCategoryById = asyncHandler(async (req, res) => {
  const { cId } = req.params;
  const categoryModel = await Category.findByIdAndDelete(cId); // Renamed Category to categoryModel
  return res.status(200).json({
    success: categoryModel ? true : false, // Corrected typo in 'success' key
    deletedCategory: categoryModel ? categoryModel : `Can't delete place by ${cId}`,
  });
});


module.exports = {
  getAllCategories,
  createCategory,
  deleteCategoryById,
  getCategoryById,
  updateCategory,
};
