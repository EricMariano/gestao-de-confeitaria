export default function AvatarMenu() {
  return (
    <>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[var(--color-primary-site)] text-[var(--color-text-site)] rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li className="transition-transform hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-sm">
          <a className="justify-between font-bold">Perfil</a>
        </li>
        <li className="transition-transform hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-sm">
          <a className="font-bold">Configurações</a>
        </li>
        <li className="transition-transform hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-sm">
          <a className="font-bold">Logout</a>
        </li>
      </ul>
    </>
  );
}