import { useState } from "react"
import dashboard from "../assets/dashboard.svg"
import calculadora from "../assets/calculadora.svg"
import metas from "../assets/metas.svg"
import planos from "../assets/planos.svg"

export default function Drawer() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative">
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn btn-circle bg-white border-0 shadow-none transition-shadow duration-300 z-10"
                aria-label="Toggle menu"
            >
                <div className="swap swap-rotate">
                    <input type="checkbox" checked={isExpanded} readOnly />
                    {/* hamburger icon */}
                    <svg
                        className="swap-off fill-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                    {/* close icon */}
                    <svg
                        className="swap-on fill-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </div>
            </button>
            
            {/* Drawer*/}
            <div 
                className={`fixed top-16 left-0 h-full bg-white shadow-lg z-20 transition-all duration-300 ease-in-out ${
                    isExpanded ? 'w-64' : 'w-16'
                }`}
            >
                <div className="p-4">
                    {isExpanded && (
                        <div className="flex justify-between items-center mb-5">
                            <h3 className="text-xl font-semibold text-black">Menu</h3>
                        </div>
                    )}
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className={`p-2 hover:bg-gray-100 rounded text-black flex items-center ${isExpanded ? 'justify-start gap-2' : 'justify-center'}`}>
                                <img src={dashboard} alt="Dashboard icon" className="w-5 h-5" />
                                {isExpanded && <span>Dashboard</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`p-2 hover:bg-gray-100 rounded text-black flex items-center ${isExpanded ? 'justify-start gap-2' : 'justify-center'}`}>
                                <img src={calculadora} alt="Calculadora icon" className="w-5 h-5" />
                                {isExpanded && <span>Calculadora IMC</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`p-2 hover:bg-gray-100 rounded text-black flex items-center ${isExpanded ? 'justify-start gap-2' : 'justify-center'}`}>
                                <img src={metas} alt="Metas icon" className="w-5 h-5" />
                                {isExpanded && <span>Metas</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`p-2 hover:bg-gray-100 rounded text-black flex items-center ${isExpanded ? 'justify-start gap-2' : 'justify-center'}`}>
                                <img src={planos} alt="Planos icon" className="w-5 h-5" />
                                {isExpanded && <span>Planos de Treino</span>}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}