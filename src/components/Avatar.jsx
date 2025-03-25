import { useState } from "react";
import AvatarMenu from "../components/AvatarMenu";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dropdown dropdown-end relative">
        <input type="checkbox" checked={isOpen} readOnly hidden />
        <div
          className=" btn btn-ghost btn-circle bg-primary-site border-none mr-4 w-8.5 h-8.5"
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
        >
          <span className="text-xs">JM</span>
        </div>

        <AvatarMenu />
      </div>
    </>
  );
}
