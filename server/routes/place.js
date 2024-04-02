const router = require("express").Router();
const placeController = require("../controller/place");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const uploader = require("../config/configCloudinary");

router.get("/getAllPlaces", placeController.getAllPlaces);
router.use(verifyAccessToken);
router.post("/createPlace", placeController.createPlace);
router.get("/getPlaceById/:pId", placeController.getPlaceById);
router.get("/getPlaceByCategoryId/:cId", placeController.getPlaceByCategoryId);
router.put("/updatePlaceById/:pId", placeController.updatePlace);
router.put("/ratingProduct", placeController.ratingPlace);
router.put(
  "/uploadImages/:pid",
  uploader.array("data-images", 10),
  placeController.uploadImagesPlace
);

router.delete("/deletePlaceById/:pId", placeController.deletePlaceById);

module.exports = router;
