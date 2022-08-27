import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pressupost from "../pagines/Pressupost";
import Welcome from "../pagines/Welcome";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/pressupost/" element={<Pressupost />} />
      <Route
        path="*"
        element={
          <div>Error 404 - No hem pogut trobar la pàgina que busques</div>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
