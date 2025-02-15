
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import Destinations from './pages/Destinations.jsx';
import DestinationDetails from './pages/DestinationDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import Sidebar from './components/Sidebar.jsx';



function App() {
  return (
    <Router>
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

