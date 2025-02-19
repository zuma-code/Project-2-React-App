import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACK_API } from "../API";



const PlanTripPage = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [tripDetails, setTripDetails] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  // Fetch destinations from database
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(BACK_API);
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getBudgetValue = () => {
    if (!tripDetails.budget) return 0;
    const budgetString = tripDetails.budget.match(/\$(\d+,?\d*)/);
    return budgetString ? parseInt(budgetString[1].replace(",", ""), 10) : 0;
  };

  const totalBudget = getBudgetValue() * tripDetails.travelers;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Plan Your Dream Trip ✈️
        </h2>

        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600">
              Trip Planned Successfully! ✅
            </h3>
            <p className="mt-2 text-gray-700">
              Destination: <strong>{tripDetails.destination}</strong>
            </p>
            <p className="text-gray-700">
              Travelers: <strong>{tripDetails.travelers}</strong>
            </p>
            <p className="text-gray-700">
              Budget per person: <strong>{tripDetails.budget}</strong>
            </p>
            <p className="text-gray-700">
              <strong>Total Budget:</strong> ${totalBudget.toLocaleString()}
            </p>
            <p className="text-gray-700">
              Dates: <strong>{tripDetails.startDate} - {tripDetails.endDate}</strong>
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Plan Another Trip
            </button>

            <button
              onClick={() => navigate("/")}
              className="mt-4 inline-flex justify-center px-6 py-3 bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Go Back to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Destination Dropdown */}
            <div>
              <label className="block font-medium text-gray-700">
                Choose Destination
              </label>
              <select
                name="destination"
                value={tripDetails.destination}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.name}>
                    {dest.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={tripDetails.startDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={tripDetails.endDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                min={tripDetails.startDate}
                required
              />
            </div>

            {/* Number of Travelers */}
            <div>
              <label className="block font-medium text-gray-700">
                Number of Travelers
              </label>
              <input
                type="number"
                name="travelers"
                min="1"
                value={tripDetails.travelers}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Budget Dropdown */}
            <div>
              <label className="block font-medium text-gray-700">Budget</label>
              <select
                name="budget"
                value={tripDetails.budget}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select budget range</option>
                <option value="Budget ($500)">Budget ($500)</option>
                <option value="Standard ($1,000)">Standard ($1,000)</option>
                <option value="Luxury ($3,000)">Luxury ($3,000)</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
            >
              Plan Trip
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PlanTripPage;



