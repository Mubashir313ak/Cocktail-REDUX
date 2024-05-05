import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
