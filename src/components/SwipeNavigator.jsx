import React from "react";
import { useAppContext } from "../context/AppContext";

// Import pages
import Landing from "../pages/Landing";
import Upload from "../pages/Upload";
import Viva from "../pages/Viva";
import Processing from "../pages/Processing";
import Dashboard from "../pages/Dashboard";
import Report from "../pages/Report";

export default function SwipeNavigator() {

  const { currentPage } = useAppContext();

  function renderPage() {

    switch(currentPage) {

      case "landing":
        return <Landing />;

      case "upload":
        return <Upload />;

      case "viva":
        return <Viva />;

      case "processing":
        return <Processing />;

      case "dashboard":
        return <Dashboard />;

      case "report":
        return <Report />;

      default:
        return <Landing />;
    }
  }

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden"
    }}>
      {renderPage()}
    </div>
  );
}