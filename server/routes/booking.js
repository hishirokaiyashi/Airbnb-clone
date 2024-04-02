const router = require("express").Router();
const bookingController = require("../controller/booking");
const { verifyAccessToken } = require("../middlewares/verifyToken");

router.get("/getAllBookings", bookingController.getAllBookings);
router.post("/createBooking", bookingController.createBooking);

router.use(verifyAccessToken);
router.get("/getBookingById/:bId", bookingController.getBookingById);

router.put("/updateBookingById/:bId", bookingController.updateBooking);
router.delete("/deleteBookingById/:bId", bookingController.deleteBookingById);

module.exports = router;