import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";
import { Authorized } from "./Authorized";



export const Kennel = () => {
  return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={
      <Authorized>
        <>
          <NavBar />
          <ApplicationViews />
        </>
      </Authorized>
    } />
  </Routes>
  //   <Route
  //     render={() => {
  //       if (localStorage.getItem("kennel_customer")) {
  //         return (
  //           <>
  //             <NavBar />
  //             <ApplicationViews />
  //           </>
  //         );
  //       } else {

  //       }
  //     }}
  //   />

  //   <Route path="/login">
  //     <Login />
  //   </Route>
  //   <Route path="/register">
  //     <Register />
  //   </Route>
  // </>
}