
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSlider from "./components/home/HeroSlider";
import Services from "./components/home/Services";
import Mission from "./components/home/Mission";
import Products from "./components/home/Products";
import Training from "./components/home/Training";
import WhyChoose from "./components/home/WhyChoose";
import FarmerFeedback from "./components/home/FarmerFeedback";

import About from "./pages/About";
import Trainings from "./pages/Trainings";
import Product from "./pages/Product";
import FarmManagement from "./pages/FarmManagement";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

import TrainingProgrammes from "./pages/TrainingProgrammes";
import PoultryFeeds from "./pages/PoultryFeeds";
import FeedersDrinkers from "./pages/FeedersDrinkers";
import VaccinesMedicines from "./pages/VaccinesMedicines";
import HousingEquipment from "./pages/HousingEquipment";
import FarmTools from "./pages/FarmTools";
import SupplyPackages from "./pages/SupplyPackages";
import RequestQuote from "./pages/RequestQuote";
import HealthBiosecurity from "./pages/HealthBiosecurity";
import FarmerStories from "./pages/FarmerStories";

function Home() {
  return (
    <main>
      {/* Homepage hero section */}
      <HeroSlider />
      <Services  />
      <Mission />
      <Products />
      <Training />
      <WhyChoose />
      <FarmerFeedback />

      {/* Future homepage sections will be added below */}
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F7F5EC] px-6 text-center">
      <h1 className="text-3xl font-bold text-[#063D2B]">
        Page not found
      </h1>

      <p className="mt-3 text-sm text-[#202923]">
        Sorry, the page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="mt-6 rounded-full bg-[#E9B949] px-6 py-3 text-sm font-bold text-[#063D2B] transition-colors hover:bg-[#d8a92f]"
      >
        Return Home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      {/* Sticky top strip and main navigation */}
      <TopBar />
      <Navbar />
      <ScrollToTop />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Trainings />} />
        <Route path="/products" element={<Product />} />
        <Route path="/farm-management" element={<FarmManagement />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />


        <Route
          path="/training/programmes"
          element={<TrainingProgrammes />}
        />
        <Route
          path="/products/poultry-feeds"
          element={<PoultryFeeds />}
        />
        <Route
          path="/products/feeders-drinkers"
          element={<FeedersDrinkers />}
        />
        <Route
          path="/products/vaccines-medicines"
          element={<VaccinesMedicines />}
        />
        <Route
          path="/products/housing-equipment"
          element={<HousingEquipment />}
        />
        <Route
          path="/products/farm-tools"
          element={<FarmTools />}
        />
        <Route
          path="/products/supply-packages"
          element={<SupplyPackages />}
        />
        <Route
          path="/products/request-quote"
          element={<RequestQuote />}
        />
        <Route
          path="/farm-management/health-biosecurity"
          element={<HealthBiosecurity />}
        />
        <Route path="/insights/farmer-stories" element={<FarmerStories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
