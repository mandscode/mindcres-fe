import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Policies from "./pages/Policies";
import FAQsPage from "./pages/FAQsPage";
import ContactUs from "./pages/ContactUs";
import WhySnore from "./pages/WhySnore";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import ProductSupport from "./pages/ProductSupport";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "./redux/actions/fetchProductDetail";
import { fetchFAQentries } from "./redux/actions/fetchFAQentries";
import { fetchProductContent } from "./redux/actions/fetchProductContent";
import { fetchTabDetails } from "./redux/actions/fetchTabDetails";
import UpwardArrow from "./components/utilities/UpwardArrow";
import ScrollToTopOnRouteChange from "./components/utilities/ScrollToTopOnRouteChange";

function App() {
  
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.productsDetail);

  useEffect(() => {
    dispatch(fetchFAQentries());
    dispatch(fetchProductContent());
    dispatch(fetchTabDetails());
    dispatch(fetchProductDetail())
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <>
      <Header/>
        <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/policies" element={<Policies/>}/>
        <Route path="/faq-s" element={<FAQsPage/>}/>
        <Route path="/why-snore" element={<WhySnore/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/product-support" element={<ProductSupport/>}/>
        <Route path="/product-detail/:pId" element={<ProductDetail/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      <UpwardArrow/>
      <Footer/>
    </>
  );
}

export default App;
