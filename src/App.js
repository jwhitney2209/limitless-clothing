import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/nav/nav.component";
import Authentication from "./pages/Authentication";
import Shop from "./components/shop/shop.component";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        {/* index will render this element at the base level of the URL shorthand for index={true} */}
        <Route index element={<Home />} /> 
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
