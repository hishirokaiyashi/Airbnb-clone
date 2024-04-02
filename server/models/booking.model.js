const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Place" },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  price: Number,
  guest: {
    adults: { type: String },
    children: { type: String },
    infants: { type: String },
    pets: { type: String },
    default: { type: String, default: "1" },
  },
  methods: [
    {
      type: String,
    },
  ],
});

//Export the model
module.exports = mongoose.model("Booking", bookingSchema);
