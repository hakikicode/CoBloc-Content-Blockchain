import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SlideProduct = React.lazy(() => import("pages/SlideProduct"));
const FAQbrandpartner = React.lazy(() => import("pages/FAQbrandpartner"));
const Slidecover = React.lazy(() => import("pages/Slidecover"));
const FAQcommunity = React.lazy(() => import("pages/FAQcommunity"));
const DashboardWatchlistbrands = React.lazy(() =>
  import("pages/DashboardWatchlistbrands")
);
const Swapcreators = React.lazy(() => import("pages/Swapcreators"));
const Swapbrands = React.lazy(() => import("pages/Swapbrands"));
const DashboardAnalyticsbrands = React.lazy(() =>
  import("pages/DashboardAnalyticsbrands")
);
const DashboardWatchlistcreators = React.lazy(() =>
  import("pages/DashboardWatchlistcreators")
);
const Browsecreators = React.lazy(() => import("pages/Browsecreators"));
const Buycreators = React.lazy(() => import("pages/Buycreators"));
const Buybrands = React.lazy(() => import("pages/Buybrands"));
const Browserextension = React.lazy(() => import("pages/Browserextension"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const FrameFourteen = React.lazy(() => import("pages/FrameFourteen"));
const Browsebrands = React.lazy(() => import("pages/Browsebrands"));
const DashboardAnalyticscreators = React.lazy(() =>
  import("pages/DashboardAnalyticscreators")
);
const Creatoraccount = React.lazy(() => import("pages/Creatoraccount"));
const Brandaccount = React.lazy(() => import("pages/Brandaccount"));
const Earn = React.lazy(() => import("pages/Earn"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/brandaccount" element={<Brandaccount />} />
          <Route path="/creatoraccount" element={<Creatoraccount />} />
          <Route
            path="/dashboardanalyticscreators"
            element={<DashboardAnalyticscreators />}
          />
          <Route path="/browsebrands" element={<Browsebrands />} />
          <Route path="/framefourteen" element={<FrameFourteen />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/browserextension" element={<Browserextension />} />
          <Route path="/buybrands" element={<Buybrands />} />
          <Route path="/buycreators" element={<Buycreators />} />
          <Route path="/browsecreators" element={<Browsecreators />} />
          <Route
            path="/dashboardwatchlistcreators"
            element={<DashboardWatchlistcreators />}
          />
          <Route
            path="/dashboardanalyticsbrands"
            element={<DashboardAnalyticsbrands />}
          />
          <Route path="/swapbrands" element={<Swapbrands />} />
          <Route path="/swapcreators" element={<Swapcreators />} />
          <Route
            path="/dashboardwatchlistbrands"
            element={<DashboardWatchlistbrands />}
          />
          <Route path="/faqcommunity" element={<FAQcommunity />} />
          <Route path="/slidecover" element={<Slidecover />} />
          <Route path="/faqbrandpartner" element={<FAQbrandpartner />} />
          <Route path="/slideproduct" element={<SlideProduct />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
