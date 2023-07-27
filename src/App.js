import "./App.css";
import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/clerk-react";
import ClerkProviderWithRoutes from "./components/ClerkProviderWithRoutes";
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
function App() {
  const [route, setRoute] = useState("Home");
  const navigate = useNavigate();
  return (
    <div className="container">
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <MediaQuery minWidth={1224}>
          <Header route={route} setRoute={setRoute} />
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <MobileMenu route={route} setRoute={setRoute} />
        </MediaQuery>

        <div className="main">
          <ClerkProviderWithRoutes />
        </div>
      </ClerkProvider>
    </div>
  );
}

export default App;
