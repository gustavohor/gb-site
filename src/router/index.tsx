import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/index";
import Privacy from "@/pages/Privacy";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/current-privacy-policy" element={<Privacy />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
