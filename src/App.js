import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions/actions";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Policies from "./pages/Policies";
import FAQsPage from "./pages/FAQsPage";
import ContactUs from "./pages/ContactUs";
import WhySnore from "./pages/WhySnore";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import ProductSupport from "./pages/ProductSupport";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/policies" element={<Policies/>}/>
        <Route path="/faq-s" element={<FAQsPage/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/why-snore" element={<WhySnore/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/product-support" element={<ProductSupport/>}/>
        <Route path="/product-detail/:productId" element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
