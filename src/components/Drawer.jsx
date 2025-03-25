import { useState } from "react";
// import dashboard from "../assets/dashboard.svg";
import logomini from "../assets/logomini.png";
// import calculadora from "../assets/calculadora.svg";
// import metas from "../assets/metas.svg";
// import planos from "../assets/planos.svg";

export default function Drawer() {
  // inicialmente era fechado default, depois mudarei os nomes da variavel
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="relative">
        {/* Menu Icon + Animation */}
        <div
          className={`fixed top-0 left-0 h-full bg-primary-site shadow-lg z-20 transition-all duration-200 ease-in-out ${
            isExpanded ? "w-58" : "w-18"
          }`}
        >
          {/* Botão de toggle reposicionado */}
          <div className="absolute top-4.5 -right-3 z-30">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-circle bg-secondary-site border-primary-site w-6 h-6 shadow-none"
              aria-label="Toggle menu"
            >
              <div className="swap swap-rotate">
                <input type="checkbox" checked={isExpanded} readOnly />
                {/* right arrow icon (quando fechado) */}
                <svg
                  className="swap-off fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
                {/* left arrow icon (quando aberto) */}
                <svg
                  className="swap-on fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Logo no canto superior esquerdo */}
          <div className="p-4 top-2">
            <img src={logomini} alt="logo" className="w-8 h-8" />
          </div>

          {/* Drawer  */}
          <div className="p-4">
            {isExpanded && (
              <div className="flex justify-between items-center mb-5">
                <span className="text-white font-semibold"></span>
              </div>
            )}
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className={`rounded text-white flex items-center ${
                    isExpanded ? "justify-start gap-2" : "justify-center"
                  }`}
                >
                  {isExpanded && (
                    <span className="font-semibold">Dashboard</span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`rounded text-white flex items-center ${
                    isExpanded ? "justify-start gap-2" : "justify-center"
                  }`}
                >
                  {isExpanded && (
                    <span className="font-semibold">Lista de Ingredientes</span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`rounded text-white flex items-center ${
                    isExpanded ? "justify-start gap-2" : "justify-center"
                  }`}
                >
                  {isExpanded && <span className="font-semibold">Pedidos</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`rounded text-white flex items-center ${
                    isExpanded ? "justify-start gap-2" : "justify-center"
                  }`}
                >
                  {isExpanded && (
                    <span className="font-semibold">Planos de Treino</span>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
