import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logomini from "../assets/logomini.png";

export default function Drawer({ onToggle }) {
  const [isExpanded, setIsExpanded] = useState(true);
  useEffect(() => {
    // Notifica o Layout sobre o estado do Drawer
    onToggle(isExpanded ? 250 : 80); // 250px para expandido, 80px para colapsado
  }, [isExpanded, onToggle]);

  return (
    <>
      <div className="relative">
        <div
          className={`fixed top-0 left-0 h-full bg-[var(--color-primary-site)] border-r border-[var(--color-borderdrawer-site)] shadow-lg z-20 transition-all duration-200 ease-in-out ${
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
                <svg
                  className="swap-off fill-[var(--color-svg-site)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
                <svg
                  className="swap-on fill-[var(--color-svg-site)]"
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

          {/* Logo */}
          <div className="p-4 top-2">
            <img src={logomini} alt="logo" className="w-8 h-8" />
          </div>

          {/* Drawer */}
          <div className="p-4">
            <ul className="space-y-2">
              <li className="transition-all duration-200 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <div className="w-9 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                      />
                    </svg>
                  </div>

                  {isExpanded && (
                    <span className="font-semibold">
                      Dashboard
                    </span>
                  )}
                </Link>
              </li>
              <li className="transition-all duration-200 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/orders"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <div className="w-9 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>

                  {isExpanded && 
                  <span className="font-semibold">
                    Pedidos
                  </span>}
                </Link>
              </li>

              <li className="transition-all duration-200 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md">
                <Link
                  to="/ingredients"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <div className="w-9 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
                  {isExpanded && (
                    <span className="font-semibold">
                      Ingredientes
                    </span>
                  )}
                </Link>
              </li>
              <li className="transition-all duration-200 ease-in-out hover:bg-[var(--hover-bg-color)] hover:shadow-lg rounded-md ">
                <Link
                  to="/Recipes"
                  className="rounded text-[var(--color-text-site)] flex items-center p-2"
                >
                  <div className="w-9 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                  </div>

                  {isExpanded && (
                    <span className="font-semibold">
                      Receitas
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
