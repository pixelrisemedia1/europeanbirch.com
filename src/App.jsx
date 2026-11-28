import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Plywood from "./pages/Plywood.jsx";
import Partners from "./pages/Partners.jsx";
import Contact from "./pages/Contact.jsx";
const wrap = (Page) => <Layout><Page /></Layout>;
export default function App(){ return <BrowserRouter basename="/europeanbirch.com"><Routes><Route path="/" element={wrap(Home)} /><Route path="/Home" element={wrap(Home)} /><Route path="/AboutUs" element={wrap(AboutUs)} /><Route path="/Plywood" element={wrap(Plywood)} /><Route path="/Partners" element={wrap(Partners)} /><Route path="/Contact" element={wrap(Contact)} /></Routes></BrowserRouter> }
