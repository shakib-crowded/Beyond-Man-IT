import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { Route, Routes, useLocation } from "react-router";

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import CyberSecurity from "./pages/CyberSecurity";
import ITConsulting from "./pages/ITConsulting";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Careers from "./pages/Careers";
import GetStarted from "./pages/GetStarted";
import ScheduleCall from "./pages/ScheduleCall";
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import ProtectedAdminRoute from "./pages/Admin/ProtectedAdminRoute";
import ProtectedLoginRoute from "./pages/Admin/ProtectedLoginRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/common/WhatsappButton";

const App = () => {
  const location = useLocation();

  // admin routes where header + footer should be hidden

  const hiddenRoutes = [
    "/admin",
    "/privacy-policy",
    "/terms-and-conditions",
    "/sitemap",
  ];

  const hideLayout = hiddenRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {/* SHOW HEADER ONLY IF NOT ADMIN PAGE */}
      {!hideLayout && <Header />}

      <main>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/IT-consulting" element={<ITConsulting />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/careers" element={<Careers />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/schedule-call" element={<ScheduleCall />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADMIN ROUTES */}
          <Route
            path="/admin/login"
            element={
              <ProtectedLoginRoute>
                <AdminLogin />
              </ProtectedLoginRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      <WhatsAppButton />

      {/* SHOW FOOTER ONLY IF NOT ADMIN PAGE */}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
