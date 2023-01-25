import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/nav/nav.component";
import Authentication from "./pages/Authentication";

function Shop() {
  return <h1>I am the shop page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        {/* index will render this element at the base level of the URL shorthand for index={true} */}
        <Route index element={<Home />} /> 
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
