const router = require("express").Router();
const amenityController = require("../controller/amenity");
const { verifyAccessToken } = require("../middlewares/verifyToken");

router.get("/getAllAmenities", amenityController.getAllAmenities);
router.use(verifyAccessToken);
router.get("/getAmenityById/:aId", amenityController.getAmenityById);
router.post("/createAmenity", amenityController.createAmenity);
router.put("/updateAmenityById/:aId", amenityController.updateAmenity);
router.delete("/deleteAmenityById/:aId", amenityController.deleteAmenityById);

module.exports = router;