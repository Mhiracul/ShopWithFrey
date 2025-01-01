import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ContentCreation from "./pages/ContentCreation";
import AffiliateMarketing from "./pages/AffiliateMarketing";
import Shopping from "./pages/Shopping";
import Consultation from "./pages/Consultation";
import SocialMedia from "./pages/SocialMedia";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";
import { useEffect, useState } from "react";

// Custom LoaderWrapper Component
const LoaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); // Get current route location

  useEffect(() => {
    // Trigger loader on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading completion
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [location]);

  return isLoading ? <Loader /> : children; // Show loader or children
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content-creation" element={<ContentCreation />} />
          <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

export default App;
