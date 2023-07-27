import Logo from "./Logo";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  const mobile = false;
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <Logo mobile={mobile} />
        </Link>
        <Navbar />
        <div className="nav-user">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
