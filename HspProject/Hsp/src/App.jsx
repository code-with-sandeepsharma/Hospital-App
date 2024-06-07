import './App.css'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home'
import BookSecondOption from './underComponent/BookSecondOption';
import HomePage from './underComponent/HealthAndWellness';
import AppointmentMessage from './underComponent/AppointmentMessage/AppointmentMessage';
import BookHealthCheckUp from './underComponent/BookHealthcheckup/BookHealthCheckUp';
import ConsultDoctors from './underComponent/ConsultDoctor/ConsultDoctor';
import FindHospital from './underComponent/FindHospital/FindHospital';
import Cardiologist from './2ndComponents/CardiologistCard';
import Orthopedics from './2ndComponents/orthopedics';
import MedicineList from './underComponent/BuyMedicine/MedicineList';
import Login from './Register/Login'
import Signup from './Register/SignUp';
import BariatricSurgery from './2ndComponents/BariatricSurgery';
import Cancer from './2ndComponents/Cancer';
import Dermatology from './2ndComponents/Dermatology';
import Endocrinology from './2ndComponents/Endocrinology';
import Gastroenterology from './2ndComponents/Gastroenterology';
import Nephorology from './2ndComponents/Nephorology';
import Neuropedics from './2ndComponents/Neuropedics';
import Pulmonology from './2ndComponents/Pulmonology';
import RadioOncology from './2ndComponents/RadioOncology';
import Rheumatology from './2ndComponents/Rheumatology';
import Transplants from './2ndComponents/Transplants';
import Urology from './2ndComponents/Urology';
import Specialist from './pages/specialist/Specialist';
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/booksecondoption' element={<BookSecondOption/>}/>
        <Route path='/healthandwellness' element={<HomePage/>}/>
        <Route path='/appointmentmessage' element={<AppointmentMessage/>}/>
        <Route path='/bookhealthcheckup' element={<BookHealthCheckUp/>}/>
        <Route path='/consultdoctors' element={<ConsultDoctors/>}/>
        <Route path='/findhospital' element={<FindHospital/>}/>
        <Route path='/buymedicine' element={<MedicineList/>}/>
        <Route path='/specialist' element={<Specialist/>}/>

        <Route path='/cardilogistcard' element={<Cardiologist/>}/>
        <Route path='/orthopedics' element={<Orthopedics/>}/>
        <Route path='/bariatricsurgery' element={<BariatricSurgery/>}/>
        <Route path='/cancer' element={<Cancer/>}/>
        <Route path='/dermatology' element={<Dermatology/>}/>
        <Route path='/endocrinology' element={<Endocrinology/>}/>
        <Route path='/gastroenterology' element={<Gastroenterology/>}/>
        <Route path='/nephorology' element={<Nephorology/>}/>
        <Route path='/neuropedics' element={<Neuropedics/>}/>
        <Route path='/pulmonology' element={<Pulmonology/>}/>
        <Route path='/radioOncology' element={<RadioOncology/>}/>
        <Route path='/rheumatology' element={<Rheumatology/>}/>
        <Route path='/transplants' element={<Transplants/>}/>
        <Route path='/urology' element={<Urology/>}/>
        
        <Route path='/login' element={<Login/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

       
      </Routes>
      </Router>     
    </>
  )
}

export default App
