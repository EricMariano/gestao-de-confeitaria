// import logoapp from "../assets/logoapp.png";
import Avatar from "../components/Avatar";
import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-none flex-1">
        <span className="flex-1"></span>
        <ThemeToggle />
        <Avatar />
      </div>
    </>
  );
}
