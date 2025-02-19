
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import Destinations from './pages/Destinations.jsx';
import DestinationDetails from './pages/DestinationDetailsPage.jsx';
import BestReviews from "./pages/BestReviewsPage.jsx";
import NotFound from './pages/NotFound.jsx';
import Sidebar from './components/Sidebar.jsx';
import DeleteDestination from "./pages/AdminPage/DeleteDestinationPage.jsx";
import AddDestinationPage from "./pages/AdminPage/AddDestinationPage.jsx";
import GreatDealsPage from "./pages/GreatDealsPage.jsx";
import PlanTripPage from "./pages/PlanTripPage.jsx";

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


function App() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dz2yxijz8' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio


  return (
   
    <Router>
       (<AdvancedImage cldImg={img}/>);
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main Content Wrapper */}
        <div className="flex flex-grow">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Main Page Content on the right */}
          <main className="flex-grow p-6 bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<DestinationDetails />} />
              <Route path="/bestReviews" element={<BestReviews />} />
              <Route path="/deleteDestination" element={<DeleteDestination />} />
              <Route path="/addDestination" element={<AddDestinationPage />} />
              <Route path="/greatDeals" element={<GreatDealsPage />} />
              <Route path="/planTrip" element={<PlanTripPage />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

