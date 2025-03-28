import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DrawerChevron from "./DrawerChevron";
import DashboardIconButton from "./DashboardIconButton";
import OrderIconButton from "./OrderIconButton";
import IngredientsIconButton from "./IngredientsIconButton";
import RecipesIconButton from "./RecipesIconButton";
import LogoComponent from "./LogoComponent";

export default function Drawer({ onToggle }) {
  const [isExpanded, setIsExpanded] = useState(true);
  useEffect(() => {
    onToggle(isExpanded ? 250 : 80); // 250px para expandido, 80px para colapsado
  }, [isExpanded, onToggle]);

  return (
    <>
      <div className="relative">
        <div
          className={`fixed top-0 left-0 h-full bg-[var(--color-primary-site)] border-r border-[var(--color-borderdrawer-site)] shadow-lg z-20 transition-all duration-40 ease-in-out ${
            isExpanded ? "w-[250px]" : "w-[80px]"
          }`}
        >
          {/* Botão de toggle */}
          <div className="absolute top-4.5 -right-3 z-30">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-circle bg-[var(--color-btnbg-site)] border-[var(--color-btnborder-site)] w-6 h-6 shadow-none"
              aria-label="Toggle menu"
            >
              <div className="swap swap-rotate">
                <input type="checkbox" checked={isExpanded} readOnly />
                <DrawerChevron />
              </div>
            </button>
          </div>
          <LogoComponent />
          {/* Drawer */}
          <div className="p-4">
            <ul className="space-y-2">

              <li className="transition-all duration-500 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <DashboardIconButton />

                  <span
                    className={`font-semibold transition-opacity duration-300 ease-in-out ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="transition-all duration-300 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/orders"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <OrderIconButton />

                  <span
                    className={`font-semibold transition-opacity duration-300 ease-in-out ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Pedidos
                  </span>
                </Link>
              </li>

              <li className="transition-all duration-300 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/ingredients"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <IngredientsIconButton />

                  <span
                    className={`font-semibold transition-opacity duration-300 ease-in-out ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Ingredientes
                  </span>
                </Link>
              </li>

              <li className="transition-all duration-300 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/Recipes"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <RecipesIconButton />

                  <span
                  className={`font-semibold transition-opacity duration-300 ease-in-out ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Receitas
                  </span>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
