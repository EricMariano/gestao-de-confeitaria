import { useState } from "react";

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
            <span className="text-xs">AC</span>
      </div>
        
        {/* Card */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
