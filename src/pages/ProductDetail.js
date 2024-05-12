import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import  { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import ProductOverview from "../components/ProductOverview";
import ReviewCardsSection from "../components/sections/ReviewCardsSection";
import ProductCarousel from "../components/sections/ProductCarousel";
import ReviewVideo from "../components/sections/ReviewVideo";
import FAQSection from "../components/sections/FAQSection";

const ProductDetail = () => {
    
    let { pId } = useParams();

    const [product, setProduct] = useState("");
    const [productFeatures, setProductFeatures] = useState("");
    const { data, loading, error } = useSelector((state) => state?.productsDetail);
    let productsContent = useSelector(state => state?.productsContent?.data?.productsContent)


    useEffect(() => {
        if (data && data.productsList) {
            const selectedProduct = data?.productsList?.find(product => product.productId === parseInt(pId));
            setProduct(selectedProduct);
            const productContent = productsContent.find(obj => obj.relatedProductCode === selectedProduct.productCode);
            setProductFeatures(productContent);
        }
    }, [data, pId]);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    return (
        <>
            <ProductOverview product={product} productFeatures={productFeatures}/>
            <ReviewCardsSection desc="SnoreQuit is dedicated to enhancing sleep for all. Experience your purchase for a complete 60 nights." title="Read what our customers have to say" page="_product-detail"/>
            <ProductCarousel/>
            <ReviewVideo/>
            <FAQSection product={product}/>
        </>
    );
}
 
export default ProductDetail;