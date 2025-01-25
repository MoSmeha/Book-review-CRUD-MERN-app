import mongoose from "mongoose";
import Review from "../models/reviews.model.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(400).json({ message: "nuh uh", success: false });
  }
};

export const addReview = async (req, res) => {
  const review = req.body; //user byeb3ata
  if (!review.name || !review.description || !review.image) {
    return res.status(400).json({ success: false, message: "suck it loser" });
  }
  const newReview = new Review(review);

  try {
    await newReview.save();
    res.status(201).json({ success: true, data: newReview });
  } catch (error) {
    res.status(400).json({ success: false, message: "suck it loser" });
  }
};

export const updateReview = async (req, res) => {
  const { id } = req.params;

  const review = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Review Id" });
  }

  try {
    const updatedReview = await Review.findByIdAndUpdate(id, review, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Review Id" });
  }

  try {
    await Review.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Review deleted" });
  } catch (error) {
    console.log("error in deleting review:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
