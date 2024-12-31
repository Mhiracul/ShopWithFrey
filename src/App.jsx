import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContentCreation from "./pages/ContentCreation";
import AffiliateMarketing from "./pages/AffiliateMarketing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content-creation" element={<ContentCreation />} />
          <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
