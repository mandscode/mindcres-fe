import { useSelector } from "react-redux";
import FlipkartBuyButton from "./utilities/FlipkartBuyButton";
import AmazonBuyButton from "./utilities/AmazonBuyButton";
import { useEffect, useState } from "react";

const DetailedProductCard = () => {
    const [ productContent, setProductContent ] = useState([]);

    let productsContent = useSelector(state => state?.productsContent?.data?.productsContent)
    let productsDetail = useSelector(state => state?.productsDetail?.data?.productsList[0])

    const { data, loading, error } = useSelector((state) => state.productsDetail);

    useEffect(() => {
        if(productsContent) {
            const product = productsContent.find(product => product.relatedProductCode === productsDetail.productCode);
            setProductContent(product);
        }
    }, [productsContent])
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;
    
    return (
        <>
            <div className="_detailed_productCard">
                <div className="_container _detailed_productCard_wrapper">
                    <div className="_detailed_productCard_media">
                        <img src={`./assets/imgs/utils/${productContent.img}`}/>
                    </div>
                    <div className="_detailed_productCard_body">
                        <div className="_detailed_productCard_title_wrapper">
                            <h2 className="_detailed_productCard_title _sub_h2">
                                {productsDetail && productsDetail?.productName}
                            </h2>
                            <span className="_detailed_productCard_tagline">
                            Your Snoring Solution for Restful Nights.
                            </span>
                        </div>
                        <div className="_detailed_productCard_desc_wrapper">
                            <p className="_detailed_productCard_desc_typo">Description</p>
                            <p className="_detailed_productCard_desc_text">
                                {productContent?.desc?.desc ? <p>{productContent?.desc?.desc}</p> : null}
                                {productContent?.desc?.key_points ? 
                                    <ul className="_detailed_productCard_desc_text_keypoints">
                                        {
                                            productContent?.desc?.key_points.map((keyPoint, index) => (
                                                <li className="_detailed_productCard_desc_text_keypoint" key={index}>
                                                    <span>{keyPoint?.title}:</span>
                                                    <span>{keyPoint?.desc}</span>
                                                </li>       
                                            ))
                                        } 

                                    </ul>
                                    : 
                                    null
                                }
                                {productContent?.desc?.desc ? productContent?.desc?.desc : null}
                            </p>
                        </div>
                        <div className="_detailed_productCard_price_wrapper">
                            {/* <span className="_product_card_info_price_mrp">{product.price}</span>
                            <span className="_product_card_info_price_offer">$<span>{product.sale_price}</span></span> */}
                        </div>
                        <div className="_product_card_buttons">
                            <FlipkartBuyButton size="_is_large"/>
                            <AmazonBuyButton size="_is_large"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default DetailedProductCard;