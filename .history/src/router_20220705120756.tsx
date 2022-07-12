import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Pages
import App from "./pages/App";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
);

export default Router;