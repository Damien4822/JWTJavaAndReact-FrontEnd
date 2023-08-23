import ListUserComponent from "./Components/ListUserComponent";
import {Route, Routes} from "react-router-dom";
import React from "react";
import CreateUserComponent from "./Components/CreateUserComponent";
import UpdateUserComponent from "./Components/UpdateUserComponent";
import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/user/index" element={<ListUserComponent/>}></Route>
          <Route path="/" element={<ListUserComponent/>}></Route>
          <Route path="/user/create" element={<CreateUserComponent/>}></Route>
          <Route path="/update/:id" element={<UpdateUserComponent/>}></Route>
          <Route path="/login" element={<LoginComponent/>}></Route>
          <Route path="/register" element={<RegisterComponent/>}></Route>
        </Routes>
      </div>
  )
}

export default App;