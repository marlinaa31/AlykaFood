import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import MenuPage from './pages/menuPage';
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<MenuPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
