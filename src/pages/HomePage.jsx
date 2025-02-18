const Home = () => {

    return (
      <div>
        {/* Hero Section */}
        <section className="relative text-center bg-cover bg-center h-[500px] flex items-center justify-center" 
          style={{ backgroundImage: "url('/images/hero-image.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-10 rounded-lg text-white">
            <h1 className="text-5xl font-bold">Explore the World with Ease!</h1>
            <p className="text-lg mt-4">Find the best destinations, deals, and travel tips in one place.</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
              Plan Your Trip
            </button>
          </div>
        </section>
  
        {/* Featured Destinations */}
        <section className="p-10">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-3 gap-6 mt-6  ">
            <div className="p-4 shadow-lg rounded-lg ">
              <img src="/images/paris.jpg" alt="Paris" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-2">Paris, France</h3>
              <p>Romantic city with stunning views.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg">
              <img src="/images/bali.jpg" alt="Bali" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-2">Bali, Indonesia</h3>
              <p>Tropical paradise for relaxation.</p>
            </div>
          </div>
        </section>
  
       
      </div>
    );
  };
  
  export default Home;
  
  