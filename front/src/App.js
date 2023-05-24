import Index from "./pages/Index";
import Cart from "./pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/addProducts";

const App = () =>{
  // state

  // comportement

  //affichage 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="*" element={<Index />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;