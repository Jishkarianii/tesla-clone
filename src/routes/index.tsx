import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import OrderPage from "../pages/OrderPage";
import DrivePage from "../pages/DrivePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order/:carId" element={<OrderPage />} />
        <Route path="/drive/:carId" element={<DrivePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
