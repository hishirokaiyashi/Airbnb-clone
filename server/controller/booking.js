const Booking = require("../models/booking.model");
const asyncHandler = require("express-async-handler");

const getAllBookings = asyncHandler(async (req, res) => {
  const response = await Category.find();
  return res.status(200).json({
    success: response ? true : false,
    bookings: response ? response : "Cannot get all bookings",
  });
});

const createBooking = asyncHandler(async (req, res) => {
  const response = await Booking.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    booking: response ? response : "Cannot create new booking",
  });
});

const updateBooking = asyncHandler(async (req, res) => {
  const { bId } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing inputs");

  const response = await Booking.findByIdAndUpdate(bId, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    updatedBooking: response ? response : `Cannot update booking at ${bId}`,
  });
});

const getBookingById = asyncHandler(async (req, res) => {
  const { bId } = req.params;
  const Booking = await Booking.findById(bId);
  return res.status(200).json({
    sucess: Booking ? true : false,
    booking: Booking ? Booking : `Can't get booking by ${bId}`,
  });
});

const deleteBookingById = asyncHandler(async (req, res) => {
  const { bId } = req.params;
  const Booking = await Booking.findById(bId);
  return res.status(200).json({
    sucess: Booking ? true : false,
    deletedBooking: Booking ? Booking : `Can't delete booking by ${bId}`,
  });
});



module.exports = {
  getAllBookings,
  createBooking,
  deleteBookingById,
  getBookingById,
  updateBooking,
};
