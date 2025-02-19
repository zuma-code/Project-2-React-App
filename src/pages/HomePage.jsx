import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handlePlanTripClick = () => {
    navigate("/planTrip"); // Navigate to the /planTrip route when button is clicked
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section 
        className="relative text-center bg-cover bg-center h-[80vv] flex items-center justify-center" 
        style={{ backgroundImage: "url('https://st.depositphotos.com/1500858/4082/i/450/depositphotos_40827443-stock-photo-travel-the-world-concept.jpg')" }}>
        <div className="bg-black bg-opacity-70 p-10 rounded-lg text-white max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight">Explore the World with us.</h1>
          <h1 className="text-l font-bold leading-tight">Find your next adventure at the best prices.</h1>
   
          <button  onClick={handlePlanTripClick}  className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
           
            Plan Your Trip
          </button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">🌍 Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Mexico City, Mexico", desc: "Haven for flavorful food, monuments and skyscrapers.", img: "https://travellersworldwide.com/wp-content/uploads/2021/12/shutterstock_1322105165.jpg.webp" },
            { name: "Bali, Indonesia", desc: "Tropical paradise for relaxation.", img: "https://thebalisun.com/wp-content/uploads/2022/07/Ubud-Palace-Gardens-and-Temple-Moat-in-Bali.jpg" },
            { name: "New York, USA", desc: "The city that never sleeps.", img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/104000/104059-New-York.jpg" }
          ].map((place, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition-transform">
              <img src={place.img} alt={place.name} className="rounded-lg w-full h-56 object-cover" />
              <h3 className="text-xl font-bold mt-2">{place.name}</h3>
              <p className="text-gray-600">{place.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Best Prices", desc: "We offer unbeatable deals on top destinations." },
            { title: "Expert Guides", desc: "Travel with professionals who know the best spots." },
            { title: "Easy Booking", desc: "Hassle-free booking with 24/7 support." }
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
  {/* Testimonials */}
  <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "John Doe", review: "Amazing experience! Highly recommended.", img: "https://fortune.com/img-assets/wp-content/uploads/2025/02/GettyImages-2153627742-e1739560733503.jpg?w=1440&q=75" },
            { name: "Jane Smith", review: "Great service and unforgettable trips!", img: "https://t3.ftcdn.net/jpg/06/31/07/16/360_F_631071667_SKhgWUs3ELEBVGmL3BmjqbnaiVXkzMu7.jpg" }
          ].map((person, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
              <img src={person.img} alt={person.name} className="w-13 h-12 rounded-full" />
              <div>
                <h4 className="text-lg font-semibold">{person.name}</h4>
                <p className="text-gray-800">{person.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* Newsletter Signup */}
      <section className="bg-blue-500 py-12 px-6 text-center text-white">
  <h2 className="text-2xl font-bold mb-4">📩 Subscribe for Exclusive Deals</h2>

  <div className="flex flex-col sm:flex-row max-w-lg mx-auto bg-white rounded-full overflow-hidden shadow-md">
    {/* Input Field */}
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full px-4 py-3 text-gray-700 focus:outline-none flex-1"
    />
    
    {/* Subscribe Button */}
    <button className="bg-yellow-500 px-6 py-3 font-semibold hover:bg-yellow-600 w-full sm:w-auto">
      Subscribe
    </button>
  </div>
</section>


  
    </div>
  );
};

export default Home;
