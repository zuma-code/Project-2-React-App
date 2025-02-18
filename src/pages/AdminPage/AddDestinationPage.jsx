import { useState } from "react";
import PropTypes from "prop-types";

const API_URL = "http://localhost:5005/destinations";

const AddDestinationPage = ({ onDestinationAdded }) => {
  const [destination, setDestination] = useState({
    name: "",
    description: "",
    image: "",
    bestTimeToVisit: "",
    popularAttractions: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when user types
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const newDestination = {
      name: destination.name.trim(),
      description: destination.description.trim(),
      image: destination.image.trim(),
      bestTimeToVisit: destination.bestTimeToVisit.trim(),
      popularAttractions: destination.popularAttractions
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      rating: 0,
      reviews: [],
    };

    if (!newDestination.name || !newDestination.description || !newDestination.image) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDestination),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to add destination.");
      }

      const data = response.headers.get("Content-Type")?.includes("application/json")
        ? await response.json()
        : null;

      setSuccess("Destination added successfully! ✅");
      setDestination({
        name: "",
        description: "",
        image: "",
        bestTimeToVisit: "",
        popularAttractions: "",
      });

      if (onDestinationAdded) {
        onDestinationAdded(data);
      }
    } catch (error) {
      console.error("Error adding destination:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setDestination({
      name: "",
      description: "",
      image: "",
      bestTimeToVisit: "",
      popularAttractions: "",
    });
    setError("");
    setSuccess("");
  };

  return (
    <div>
      <h2>Add New Destination</h2>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      {success && <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Destination Name"
            value={destination.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            value={destination.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={destination.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="bestTimeToVisit"
            placeholder="Best Time to Visit"
            value={destination.bestTimeToVisit}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="popularAttractions"
            placeholder="Popular Attractions (comma-separated)"
            value={destination.popularAttractions}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Destination"}
          </button>
          <button type="button" onClick={handleReset} disabled={loading}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

AddDestinationPage.propTypes = {
  onDestinationAdded: PropTypes.func,
};

export default AddDestinationPage;

