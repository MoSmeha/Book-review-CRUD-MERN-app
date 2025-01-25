import { useState } from "react";
import "./CreateForm.css";
import { useReviews } from "./review";
const CreateForm = () => {
  const [review, setReview] = useState({
    name: "",
    image: "",
    description: "",
  });

  const { createReview } = useReviews();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await createReview(review);
    if (!success) {
      console.log(`fail ${message}`);
    } else {
      console.log(`success ${message}`);
    }
    // Reset the form after submission
    setReview({
      name: "",
      image: "",
      description: "",
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={review.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={review.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={review.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default CreateForm;
