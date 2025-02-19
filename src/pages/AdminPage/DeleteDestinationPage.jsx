import { useState, useEffect } from "react";
import { BACK_API } from "../../API";


const DeleteDestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(""); // To store error messages
  const [showModal, setShowModal] = useState(false); // To toggle delete confirmation modal
  const [deleteId, setDeleteId] = useState(null); // To store the id of destination to delete

  // Fetch destinations on mount
  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch(`${BACK_API}/destinations`);
        if (!res.ok) throw new Error("Failed to fetch destinations");
        const data = await res.json();
        setDestinations(data);
        setError(""); // Clear any previous error
      } catch (error) {
        setError("Error fetching destinations. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchDestinations();
  }, []);

  // Delete destination
  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API_URL}/destinations/${deleteId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete destination");

      setDestinations((prev) => prev.filter((dest) => dest.id !== deleteId)); // Remove from UI
      setShowModal(false); // Close modal after delete
      setDeleteId(null); // Reset deleteId
      setError(""); // Clear any previous error
    } catch (error) {
      setError("Error deleting destination. Please try again later.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Panel - Manage Destinations</h1>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Loading Spinner */}
      {loading ? (
        <p>Loading destinations...</p>
      ) : (
        <ul>
          {destinations.map((dest) => (
            <li key={dest.id} className="flex justify-between items-center p-2 border-b">
              <span>{dest.name} - {dest.bestTimeToVisit}</span>
              <button
                onClick={() => {
                  setDeleteId(dest.id);
                  setShowModal(true); // Show confirmation modal
                }}
                className="bg-red-500 text-white px-4 py-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete this destination?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)} // Close modal without deleting
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete} // Proceed with delete
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteDestinationPage;


