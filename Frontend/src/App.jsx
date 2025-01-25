import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CreateForm from "./CreateForm";
import ReviewList from "./ReviewList";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/add-reviews" element={<CreateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
