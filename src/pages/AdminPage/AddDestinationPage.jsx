import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BACK_API } from "../../API";


// Function to validate if the URL is valid
const isValidUrl = (url) => /^(ftp|http|https):\/\/[^ "]+$/.test(url);

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
    setError(""); 
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!isValidUrl(destination.image)) {
      setError("Please enter a valid image URL.");
      setLoading(false);
      return;
    }

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
      const response = await axios.post(`${BACK_API}/destinations`, newDestination);
      setSuccess("Destination added successfully! ✅");
      setDestination({
        name: "",
        description: "",
        image: "",
        bestTimeToVisit: "",
        popularAttractions: "",
      });

      if (onDestinationAdded) {
        onDestinationAdded(response.data);
      }
    } catch (error) {
      console.error("Error adding destination:", error);
      setError(error.response?.data || error.message || "Failed to add destination.");
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
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add New Destination</h2>

      {error && (
        <p className="text-red-600 text-center font-semibold bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-600 text-center font-semibold bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium text-lg">Destination Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter destination name"
            value={destination.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium text-lg">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={destination.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-medium text-lg">Image URL</label>
          <input
            id="image"
            type="url"
            name="image"
            placeholder="Enter image URL"
            value={destination.image}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="bestTimeToVisit" className="block font-medium text-lg">Best Time to Visit</label>
          <input
            id="bestTimeToVisit"
            type="text"
            name="bestTimeToVisit"
            placeholder="Enter best time to visit"
            value={destination.bestTimeToVisit}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>
        <div>
          <label htmlFor="popularAttractions" className="block font-medium text-lg">Popular Attractions</label>
          <input
            id="popularAttractions"
            type="text"
            name="popularAttractions"
            placeholder="Enter popular attractions (comma-separated)"
            value={destination.popularAttractions}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 text-white text-lg px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Destination"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="bg-yellow-500 text-white text-lg px-6 py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50"
          >
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

