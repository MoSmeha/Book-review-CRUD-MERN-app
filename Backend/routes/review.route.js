import express from "express";

import {
  addReview,
  deleteReview,
  getReviews,
  updateReview,
} from "../controllers/review.controller.js";

const router = express.Router();
router.get("/", getReviews);
router.post("/", addReview);

router.delete("/:id", deleteReview);

router.put("/:id", updateReview);
export default router;
