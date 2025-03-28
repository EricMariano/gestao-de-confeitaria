import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/Orders";
import Ingredients from "../pages/Ingredients";
import Recipes from "../pages/Recipes";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Define o Layout como um wrapper para as rotas filhas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </Router>
  );
}