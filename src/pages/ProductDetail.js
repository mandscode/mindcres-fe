import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import  { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import ProductOverview from "../components/ProductOverview";
import ReviewCardsSection from "../components/sections/ReviewCardsSection";
import ProductCarousel from "../components/sections/ProductCarousel";
import ReviewVideo from "../components/sections/ReviewVideo";

const ProductDetail = () => {
    
    let { productId } = useParams();

    const [product, setProduct] = useState("");
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        if (data && data.products) {
            const selectedProduct = data.products.find(product => product._id === parseInt(productId));
            setProduct(selectedProduct);
        }
    }, [data, productId]);

    return (
        <>
            <ProductOverview product={product}/>
            <ReviewCardsSection desc="SnoreQuit is dedicated to enhancing sleep for all. Experience your purchase for a complete 60 nights." title="Read what our customers have to say" page="_product-detail"/>
            <ProductCarousel/>
            <ReviewVideo/>
        </>
    );
}
 
export default ProductDetail;