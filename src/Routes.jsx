import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HubunganInvestor = React.lazy(() => import("pages/HubunganInvestor"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/landingpage" element={<LandingPage />} /> */}
          <Route path="/hubunganinvestor" element={<HubunganInvestor />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
