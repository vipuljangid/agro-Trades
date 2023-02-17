import './App.css';
import React, { Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Header from '';
const Header = React.lazy(() => import("./components/header/header"));
// import Footer from './components/footer/footer';
// import Whatsapp from ';
// import Products from './components/products/products';
const CompanyPage = React.lazy(() =>
  import("./components/companyPage/companyPage")
);
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Products=React.lazy(()=>import("./components/products/products"))
const Whatsapp = React.lazy(() => import("./components/whatsapp/whatapp"));


function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <div
          className="top-right-icon"
          style={{
            backgroundImage: "url(./images/cssDesign.webp)",
            backgroundSize: "cover",
            height: "280px",
            width: "190px",
            zIndex: 100,
            // color: "#f5f5f5",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        ></div>
        <Header />
        <Whatsapp />
        <Routes>
          <Route exact path="/" element={<CompanyPage />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
