import { useEffect } from "react";
import { useReviews } from "./review";
import ReviewCard from "./ReviewCard";
import "./ReviewList.css";
export default function ReviewList() {
  const { reviews, fetchReviews } = useReviews();
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);
  console.log(reviews);
  return (
    <div className="container">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
}
