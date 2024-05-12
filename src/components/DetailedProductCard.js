import { useSelector } from "react-redux";
import FlipkartBuyButton from "./utilities/FlipkartBuyButton";
import AmazonBuyButton from "./utilities/AmazonBuyButton";

const DetailedProductCard = () => {
    let product = useSelector(state => state?.data?.data?.products[0])

    return (
        <>
            <div className="_detailed_productCard">
                <div className="_container _detailed_productCard_wrapper">
                    <div className="_detailed_productCard_media">
                        <img src={`./assets/imgs/utils/${product.img}`}/>
                    </div>
                    <div className="_detailed_productCard_body">
                        <div className="_detailed_productCard_title_wrapper">
                            <h2 className="_detailed_productCard_title">

                            </h2>
                            <span className="_detailed_productCard_tagline">

                            </span>
                        </div>
                        <div className="_detailed_productCard_desc_wrapper">
                            <p className="_detailed_productCard_desc_typo">Description</p>
                            <p className="_detailed_productCard_desc_text">
                                {product?.desc?.desc ? <p>{product?.desc?.desc}</p> : null}
                                {product?.desc?.key_points ? 
                                    <ul className="_detailed_productCard_desc_text_keypoints">
                                        {
                                            product?.desc?.key_points.map((keyPoint, index) => (
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
                                {product?.desc?.desc ? product?.desc?.desc : null}
                            </p>
                        </div>
                        <div className="_detailed_productCard_price_wrapper">
                            <span className="_product_card_info_price_mrp">{product.price}</span>
                            <span className="_product_card_info_price_offer">$<span>{product.sale_price}</span></span>
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