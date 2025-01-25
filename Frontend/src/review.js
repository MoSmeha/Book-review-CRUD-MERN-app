import { create } from "zustand";

export const useReviews = create((set) => ({
  reviews: [],
  setReview: (reviews) => set({ reviews }),
  createReview: async (newReview) => {
    if (!newReview.name || !newReview.image || !newReview.description) {
      return { success: false, message: "Write all inputs" };
    }
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });
    const data = await res.json();
    set((state) => ({ reviews: [...state.reviews, data.data] }));
    return { success: true, message: "Product added successfully" };
  },
  fetchReviews: async () => {
    const res = await fetch("/api/reviews");
    const data = await res.json();
    set({ reviews: data.data });
  },

  deleteReview: async (id) => {
    const res = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      reviews: state.reviews.filter((review) => review._id !== id),
    }));
    return { success: true, message: data.message };
  },

  updateReview: async (id, updatedReview) => {
    const res = await fetch(`/api/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      reviews: state.reviews.map((review) =>
        review._id === id ? data.data : review
      ),
    }));
    return { success: true, message: data.message };
  },
}));
