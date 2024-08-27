import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import BookSecondOption from "./underComponent/BookSecondOption";
import HomePage from "./underComponent/HealthAndWellness";
import AppointmentMessage from "./underComponent/AppointmentMessage/AppointmentMessage";
import BookHealthCheckUp from "./underComponent/BookHealthcheckup/BookHealthCheckUp";
import ConsultDoctors from "./underComponent/ConsultDoctor/ConsultDoctor";
import FindHospital from "./underComponent/FindHospital/FindHospital";
import Cardiologist from "./2ndComponents/CardiologistCard";
import Orthopedics from "./2ndComponents/orthopedics";
import MedicineList from "./underComponent/BuyMedicine/MedicineList";
import Login from "./Register/Login";
import Signup from "./Register/SignUp";
import BariatricSurgery from "./2ndComponents/BariatricSurgery";
import Cancer from "./2ndComponents/Cancer";
import Dermatology from "./2ndComponents/Dermatology";
import Endocrinology from "./2ndComponents/Endocrinology";
import Gastroenterology from "./2ndComponents/Gastroenterology";
import Nephorology from "./2ndComponents/Nephorology";
import Neuropedics from "./2ndComponents/Neuropedics";
import Pulmonology from "./2ndComponents/Pulmonology";
import RadioOncology from "./2ndComponents/RadioOncology";
import Rheumatology from "./2ndComponents/Rheumatology";
import Transplants from "./2ndComponents/Transplants";
import Urology from "./2ndComponents/Urology";
import Specialist from "./pages/specialist/Specialist";
import AddDoctor from "./pages/addDoctor/AddDoctor";
import Dashboard from "./underComponent/Dashboard/Dashboard";
import HealthRecordList from "./underComponent/HealthRecord/HealthRecord";
import BuyMedicine from "./buyMed";
import BabyCareProduct from "./medicineComponent/pages/babyCareProduct";
import SummerEssential from "./medicineComponent/pages/summerEssential";
import Ayurveda from "./medicineComponent/pages/Ayurveda";
import Glucometer from "./medicineComponent/pages/Glucometer";
import HealthDevice from "./medicineComponent/pages/HealthDevices";
import Multivitamin from "./medicineComponent/pages/multivitamin";
import Nutritional from "./medicineComponent/pages/Nutritional";
import PersonalCare from "./medicineComponent/pages/PersonalCare";
import Protien from "./medicineComponent/pages/protein";
import SkinCare from "./medicineComponent/pages/SkinCare";
import WomenCare from "./medicineComponent/pages/WomenCare";
import Cart from "./medicineComponent/Cart/cart";
import Products from "./medicineComponent/products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booksecondoption" element={<BookSecondOption />} />
          <Route path="/healthandwellness" element={<HomePage />} />
          <Route path="/appointmentmessage" element={<AppointmentMessage />} />
          <Route path="/bookhealthcheckup" element={<BookHealthCheckUp />} />
          <Route path="/consultdoctors" element={<ConsultDoctors />} />
          <Route path="/findhospital" element={<FindHospital />} />
          <Route path="/specialist" element={<Specialist />} />

          <Route path="/cardilogistcard" element={<Cardiologist />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/bariatricsurgery" element={<BariatricSurgery />} />
          <Route path="/cancer" element={<Cancer />} />
          <Route path="/dermatology" element={<Dermatology />} />
          <Route path="/endocrinology" element={<Endocrinology />} />
          <Route path="/gastroenterology" element={<Gastroenterology />} />
          <Route path="/nephorology" element={<Nephorology />} />
          <Route path="/neuropedics" element={<Neuropedics />} />
          <Route path="/pulmonology" element={<Pulmonology />} />
          <Route path="/radioOncology" element={<RadioOncology />} />
          <Route path="/rheumatology" element={<Rheumatology />} />
          <Route path="/transplants" element={<Transplants />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="healthRecords" element={<HealthRecordList />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/adddoctor" element={<AddDoctor />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/buymedicine" element={<Products />} />

          <Route path="/babycareproduct" element={<BabyCareProduct />} />
          <Route path="/summeressential" element={<SummerEssential />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/glucometer" element={<Glucometer />} />
          <Route path="/healthdevice" element={<HealthDevice />} />
          <Route path="/multivitamin" element={<Multivitamin />} />
          <Route path="/nutritional" element={<Nutritional />} />
          <Route path="/personalcare" element={<PersonalCare />} />
          <Route path="/protien" element={<Protien/>} />
          <Route path="/skincare" element={<SkinCare />} />
          <Route path="/womencare" element={<WomenCare />} />
          <Route path="/cart" element={<Cart/>} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
