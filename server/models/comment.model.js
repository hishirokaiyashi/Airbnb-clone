const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var commentSchema = new mongoose.Schema(
  {
    placeId: {
      type: mongoose.Types.ObjectId,
      ref: "Place",
    },
    rate: {
      cleanliness: {
        type: Number,
      },
      accurancy: {
        type: Number,
      },
      checkin: {
        type: Number,
      },
      communication: {
        type: Number,
      },
      location: {
        type: Number,
      },
      value: {
        type: Number,
      },
    },
    body: {
      type: String,
      required: true,
      maxlength: 200,
    },
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Comment", commentSchema);
