import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./medicineComponent/products.jsx";
import BabyCareProduct from "./medicineComponent/pages/babyCareProduct.jsx";
import SummerEssential from "./medicineComponent/pages/summerEssential.jsx";
import Ayurveda from "./medicineComponent/pages/Ayurveda.jsx";
import Glucometer from "./medicineComponent/pages/Glucometer.jsx";
import HealthDevice from "./medicineComponent/pages/HealthDevices.jsx";
import Multivitamin from "./medicineComponent/pages/multivitamin.jsx";
import Nutritional from "./medicineComponent/pages/Nutritional.jsx";
import PersonalCare from "./medicineComponent/pages/PersonalCare.jsx";
import Protien from "./medicineComponent/pages/protein.jsx";
import SkinCare from "./medicineComponent/pages/SkinCare.jsx";
import WomenCare from "./medicineComponent/pages/WomenCare.jsx";
import Modal from "./medicineComponent/Cart/CartModal.jsx";
import Cart from "./medicineComponent/Cart/cart.jsx";



const BuyMedicine = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/babycareproduct" element={<BabyCareProduct />} />
          <Route path="/summeressential" element={<SummerEssential />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/glucometer" element={<Glucometer />} />
          <Route path="/healthdevice" element={<HealthDevice />} />
          <Route path="/multivitamin" element={<Multivitamin />} />
          <Route path="/nutritional" element={<Nutritional />} />
          <Route path="/personalcare" element={<PersonalCare />} />
          <Route path="/protien" element={<Protien />} />
          <Route path="/skincare" element={<SkinCare />} />
          <Route path="/womencare" element={<WomenCare />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <div className="container mx-auto">
    </div>
      </div>
    </Router>
  );
};

export default BuyMedicine;
