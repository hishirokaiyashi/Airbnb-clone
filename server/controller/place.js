const Place = require("../models/place.model");
const asyncHandler = require("express-async-handler");

const getAllPlaces = asyncHandler(async (req, res) => {
  const response = await Place.find();
  return res.status(200).json({
    success: response ? true : false,
    places: response ? response : "Cannot get all places",
  });
});

const createPlace = asyncHandler(async (req, res) => {
  const response = await Place.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    place: response ? response : "Cannot create new place",
  });
});

const updatePlace = asyncHandler(async (req, res) => {
  const { pId } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing inputs");

  const response = await Place.findByIdAndUpdate(pId, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    updatedPlace: response ? response : `Cannot update Place ${pId}`,
  });
});

const getPlaceById = asyncHandler(async (req, res) => {
  const { pId } = req.params;
  const place = await Place.findById(pId);
  return res.status(200).json({
    sucess: place ? true : false,
    place: place ? place : `Can't get Place by ${pId}`,
  });
});

const deletePlaceById = asyncHandler(async (req, res) => {
  const { pId } = req.params;
  const Place = await Place.findById(pId);
  return res.status(200).json({
    sucess: Place ? true : false,
    deletedPlace: Place ? Place : `Can't delete place by ${pId}`,
  });
});

// GET PLACE BY CATEGORY ID
const getPlaceByCategoryId = asyncHandler(async (req, res) => {
  const { cId } = req.params;
  const place = await Place.find({ category: cId }).populate(
    "category",
    "name"
  );

  return res.status(200).json({
    sucess: place ? true : false,
    place: place ? place : `Can't get place by category with id: ${cId}`,
  });
});

// RATING PLACE BY USER

const ratingPlace = asyncHandler(async (req, res) => {
  const { _id } = req.user; // middleware tra ve

  const { star, comment, pid } = req.body;
  if (!pid || !star) {
    throw new Error("Missing inputs");
  }

  //
  const ratingPlace = await Place.findById(pid);
  const alreadyRatingPlace = ratingPlace?.rating?.find(
    (place) => place.postedBy.toString() === _id // objectId va` string
  );

  // rating: {
  //   type: [
  //     {
  //       star: { type: Number },
  //       postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
  //       comment: { type: String },
  //     },
  //   ],
  //   totalRatings: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
  if (alreadyRatingPlace) {
    // update star and comment
    // Đứng ở bảng sp update 1 document nào đó có rating document chứa alreadyRatingProduct
    await Place.updateOne(
      { rating: { $elemMatch: alreadyRatingPlace } },
      {
        $set: {
          //rating.$.star: giấu $ tượng trưng cho thằng element tìm đc ở {} đầu tiên
          "rating.$.star": star,
          "rating.$.comment": comment,
        },
      },
      {
        new: true,
      }
    );
  } else {
    // add star and comment
    await Place.findByIdAndUpdate(
      pid,
      {
        $push: {
          rating: {
            star,
            comment,
            postedBy: _id,
          },
        },
      },
      { new: true }
    );
  }

  // Sum avarage rating
  const updatedPlace = await Place.findById(pid);
  const totalRatings = updatedPlace.rating.length;
  const averageRatings = updatedPlace.rating.reduce((sum, element) => {
    return sum + +element.star;
  }, 0);
  updatedPlace.totalRatings =
    Math.round((averageRatings * 10) / totalRatings) / 10;
  console.log(updatedPlace);
  await updatedPlace.save();

  return res.status(200).json({
    success: true,
    updatedPlace,
  });
});
// *** UPLOAD IMAGE FOR PLACE *** //
const uploadImagesPlace = asyncHandler(async (req, res) => {
  const { pid } = req.params;

  if (!req.files) {
    throw new Error("missing Inputs");
  }
  const response = await Place.findByIdAndUpdate(
    pid,
    {
      $push: { images: { $each: req.files.map((file) => file.path) } },
    },
    {
      new: true,
    }
  );

  return res.status(200).json({
    sucess: response ? true : false,
    updatedPlace: response ? response : "Can't upload images Place",
  });
});

module.exports = {
  createPlace,
  updatePlace,
  getPlaceById,
  deletePlaceById,
  getPlaceByCategoryId,
  getAllPlaces,
  ratingPlace,
  uploadImagesPlace,
};
