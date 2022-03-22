import './App.css';
import React from "react";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import AppState from './components/context/AppState';
import Navi from "./components/navi/Navi";
import NotFound from "./components/common/NotFound";
import Dashboard from "./components/root/Dashboard";
import CustomerUpdateModal from "./components/customers/CustomerUpdateModal";
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/common/Home';



function App() {
  return (
    <AppState>
      {/* <Container> */}
        <Navi />
        <div className="ui divider"></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<Dashboard />} />
          <Route path="/update/:id" element={<CustomerUpdateModal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<NotFound />} />
        </Routes>
      {/* </Container> */}
    </AppState>
  );
}

export default App;
