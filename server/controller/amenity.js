const Amenities = require("../models/amenity.model");
const asyncHandler = require("express-async-handler");

const getAllAmenities = asyncHandler(async (req, res) => {
  const response = await Amenities.find();
  return res.status(200).json({
    success: response ? true : false,
    amenities: response ? response : "Cannot get all amenities",
  });
});

const createAmenity = asyncHandler(async (req, res) => {
  const response = await Amenities.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    amenity: response ? response : "Cannot create new amenity",
  });
});

const updateAmenity = asyncHandler(async (req, res) => {
  const { aId } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing inputs");

  const response = await Amenities.findByIdAndUpdate(aId, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    updatedAmenity: response ? response : `Cannot update Amenity ${aId}`,
  });
});

const getAmenityById = asyncHandler(async (req, res) => {
  const { aId } = req.params;
  const Amenity = await Amenities.findById(aId);
  return res.status(200).json({
    sucess: Amenity ? true : false,
    amenity: Amenity ? Amenity : `Can't get Amenity by ${aId}`,
  });
});

const deleteAmenityById = asyncHandler(async (req, res) => {
  const { aId } = req.params;
  const AmenityModel = await Amenities.findByIdAndDelete(aId); // Renamed Amenity to AmenityModel
  return res.status(200).json({
    success: AmenityModel ? true : false, // Corrected typo in 'success' key
    deletedAmenity: AmenityModel ? AmenityModel : `Can't delete place by ${aId}`,
  });
});


module.exports = {
    getAllAmenities,
  createAmenity,
  deleteAmenityById,
  getAmenityById,
  updateAmenity,
};
