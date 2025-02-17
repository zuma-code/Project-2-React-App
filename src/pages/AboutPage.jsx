import logoNavbar from '../assets/logoNavbar.png';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Centered Logo */}
      <div className="flex justify-center mb-4">
        <img src={logoNavbar} alt="Explore Travel Logo" className="h-40 w-40" />
      </div>

      <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        About Us
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Explore Travel offers a wide range of trips across Europe, covering destinations from Italy and the Mediterranean to Scandinavia, Central Europe, Paris, the Netherlands, and even Russia. Beyond Europe, our tours extend to Turkey, the Middle East—including Jordan, Egypt, and Israel—as well as further destinations such as China, Japan, Vietnam, India, Canada, and the United States.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        Our travel experiences are designed for a diverse audience, with a focus on providing extensive services while maintaining an excellent balance of quality and affordability.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        What sets Explore Travel apart is its commitment to high-quality standards. Our tours feature Spanish-speaking guides, carefully selected accommodations, numerous sightseeing opportunities, and a variety of meal plans, including an exceptional All-Inclusive option.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        By directly managing all aspects of our services, Explore Travel ensures top-tier customer care and competitive pricing, offering travelers an unforgettable and hassle-free experience.
      </p>
    </div>
  );
};

export default About;
