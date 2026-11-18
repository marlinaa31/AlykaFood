import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutUs from './pages/AboutUs';
import './index.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
