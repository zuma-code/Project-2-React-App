import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const URL= 'http://localhost:5005/travels/' 
  
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`${URL}${id}`);
        if (!response.ok) {
          throw new Error("Destination not found");
        }
        const data = await response.json();
        setDestination(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) return <h2 className="text-center mt-4">Loading...</h2>;
  if (error) return <h2 className="text-center mt-4 text-red-500">{error}</h2>;
  if (!destination) return <h2 className="text-center mt-4">Destination not found.</h2>;

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">{destination.name}</h2>
      <p className="mt-2 text-gray-700">{destination.description}</p>
      <img src={destination.image} alt={destination.name} className="mt-4 mx-auto rounded-lg w-96" />
    </div>
  );
};

export default DestinationDetails;
