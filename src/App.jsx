import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/molecules";
import { Home, Login, Cart, HomeAdmin } from "./pages";
import Detail from "./pages/Detail/Detail";
import { ProtectRoute } from "./utils/PrivateRoute/PrivateRoute";
import Recap from "./pages/Admin/Recap.jsx";
function App() {
  const { PrivateRouterFalseLogin, PrivateRouterTrueLogin } = ProtectRoute();
  return (
    <div>
      <Navbar />
      <div className="pt-16 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />

          <Route element={<PrivateRouterTrueLogin />}>
            <Route path="/login" element={<Login />} />
          </Route>
            <Route path="/homeadmin" element={<HomeAdmin />} />

          {/* Penambahan */}
          <Route path='/recap' element={<Recap/>}/>


          <Route element={<PrivateRouterFalseLogin />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;