import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutUs from './pages/AboutUs';
import MenuPage from './pages/menuPage';
import ContactUsPage from './pages/contactUsPage';
import FormAdminPage from './pages/formAdminPage'
import './index.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<MenuPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path="/menu/admin" element={<FormAdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
