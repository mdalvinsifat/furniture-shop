
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Product from './Product/Product';


function App() {
  return (
   <div>


<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>


   </div>
  );
}

export default App;
