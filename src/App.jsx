import { useState } from "react";
import ClimitraEngine from "./components/ClimitraEngine";
import CDRPage from "./components/CDRPage";
import ContactUs from "./components/ContactUs";
import TeamPage from "./components/TeamPage";
import IndustrialPage from "./components/IndustrialPage";
import TechPage from "./components/TechPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "industrial":
        return <IndustrialPage />;
      case "cdr":
        return <CDRPage />;
      case "contact":
        return <ContactUs />;
      case "team":
        return <TeamPage />;
      case "tech":
        return <TechPage />;
      default:
        return <ClimitraEngine />;
    }
  };

  // Make setCurrentPage globally available for navigation
  window.navigateTo = setCurrentPage;

  return <div className="App">{renderPage()}</div>;
}

export default App;
