import logoapp from "../assets/logoapp.png";
import Avatar from "../components/Avatar";
import Drawer from "../components/Drawer";

function Navbar() {
  return (
    <div className="navbar bg-white">
      <Drawer />
      <div className="flex-1">
        <img src={logoapp} alt="logoapp" className="w-75 h-7.5 ml-2" />
      </div>
      <Avatar />
    </div>
  );
}

export default Navbar;
