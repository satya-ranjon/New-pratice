import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

export default function PrivateRoutes() {
  return UseAuth ? <Outlet /> : <Navigate to="home" />;
}
