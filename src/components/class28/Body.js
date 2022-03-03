import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import AllPost from "./AllPost";
import NotFound from "./NotFound";
import SinglePost from "./SinglPost";
import PrivateRoutes from "./private/PrivateRoutes";
import DashBord from "./private/DashBord";
import Setting from "./private/Setting";

export default function Body() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />}>
          <Route path="v5" element={<AllPost />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-post/" element={<AllPost />}></Route>
        <Route path="/all-post/:catagore/:key/" element={<SinglePost />} />
        <Route path="/*" element={<PrivateRoutes />}>
          <Route path="*" element={<NotFound />} />
          <Route path="dashbord" element={<DashBord />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}
