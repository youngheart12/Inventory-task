
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Admin from "./component/Admin/admin";
import Login from './component/Login/login'
import Sales from "./component/Sales/sales";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route exact path="/admin" element={<Admin/>}/>
      <Route exact path="/sales" element={<Sales/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
