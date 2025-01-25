/* eslint-disable react/prop-types */
import { useState } from "react";
import { Edit, Trash2, X } from "lucide-react";
import { useReviews } from "./review";
import "./ReviewCard.css";

const ContentCard = ({ review }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: review.name,
    description: review.description,
    image: review.image,
  });
  const { deleteReview, updateReview } = useReviews();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateReview(review._id, formData);
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="card">
        <img
          src={review.image || "/api/placeholder/300/200"}
          alt={review.name}
        />
        <div className="card-content">
          <h3 className="card-title">{review.name}</h3>
          <p className="card-description">{review.description}</p>
        </div>
        <div className="icon-container">
          <button
            onClick={() => setIsModalOpen(true)}
            className="icon-button"
            aria-label="Edit"
          >
            <Edit size={20} color="#4b5563" />
          </button>
          <button
            onClick={() => deleteReview(review._id)}
            className="icon-button"
            aria-label="Delete"
          >
            <Trash2 size={20} color="#ef4444" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              <X size={20} color="#4b5563" />
            </button>
            <h2 className="card-title">Edit Review</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="textarea"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image" className="label">
                  Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="button-container">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="button cancel-button"
                >
                  Cancel
                </button>
                <button type="submit" className="button save-button">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentCard;
