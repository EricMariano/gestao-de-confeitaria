import { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

export default function Layout() {
  const [drawerWidth, setDrawerWidth] = useState(250); // Largura inicial do Drawer

  return (
    <div className="flex">
      {/* Drawer ocupa uma largura fixa */}
      <Drawer onToggle={setDrawerWidth} />
      {/* Conteúdo principal deslocado dinamicamente */}
      <div
        className="flex-1 transition-all duration-200"
        style={{ marginLeft: `${drawerWidth}px` }}
      >
        <Navbar />
        <main className="ml-8 mr-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
