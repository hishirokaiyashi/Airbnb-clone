const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var placeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    
    address: {
      number: {
        type: String,
      },
      street: {
        type: String,
      },
      ward: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    }
    ,
    attributes: {
      guest: {
        type: Number,
        required: true,
      },
      bedroom: {
        type: Number,
        required: true,
      },
      bed: {
        type: Number,
        required: true,
      },
      baths: {
        type: Number,
        required: true,
      },
    },
    images: {
      type: Array,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    rating: {
      type: [
        {
          star: { type: Number },
          postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
          comment: { type: String },
        },
      ],
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    price: { type: String, required: true },
    sale: { type: Number },
    host: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
    rules: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Rule",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Place", placeSchema);
