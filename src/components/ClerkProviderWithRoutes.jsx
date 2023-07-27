import React from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import Scores from "../pages/Scores";
import Stats from "../pages/Stats";
import Admin from "../pages/Admin";
import Players from "../pages/Players";
import Player from "../pages/Player";
import AddPlayer from "../pages/AddPlayer";
import AddScore from "../pages/AddScore";
import Settings from "../pages/Settings";

const ClerkProviderWithRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/sign-in/*"
        element={<SignIn routing="path" path="/sign-in" />}
      />
      <Route
        path="/sign-up/*"
        element={<SignUp routing="path" path="/sign-up" />}
      />
      <Route exact path="/Home" element={<Home />} />
      <Route
        exact
        path="/Schedule"
        element={
          <>
            <SignedIn>
              <Schedule />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/Scores"
        element={
          <>
            <SignedIn>
              <Scores />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/AddScore"
        element={
          <>
            <SignedIn>
              <AddScore />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/Stats"
        element={
          <>
            <SignedIn>
              <Stats />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/Players"
        element={
          <>
            <SignedIn>
              <Players />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/Player/:id"
        element={
          <>
            <SignedIn>
              <Player />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/AddPlayer"
        element={
          <>
            <SignedIn>
              <AddPlayer />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/Admin"
        element={
          <>
            <SignedIn>
              <Admin />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        exact
        path="/Settings"
        element={
          <>
            <SignedIn>
              <Settings />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
};

export default ClerkProviderWithRoutes;
