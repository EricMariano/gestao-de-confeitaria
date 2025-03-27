import logomini from "../assets/logomini.png";

export default function LogoComponent() {
  return (
    <div className="p-4 top-2">
      <img src={logomini} alt="logo" className="w-8 h-8" />
    </div>
  );
}
