import { useState } from "react";

export default function AvatarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-secondary-site rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between font-bold">Perfil</a>
        </li>
        <li>
          <a className="font-bold">Configurações</a>
        </li>
        <li>
          <a className="font-bold">Logout</a>
        </li>
      </ul>
    </>
  );
}
