import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
  const { id } = useParams();
  return <h2>Destination Details for ID: {id}</h2>;
};

export default DestinationDetails;