import { Link } from "react-router-dom";
import AmazonBuyButton from "./utilities/AmazonBuyButton";
import FlipkartBuyButton from "./utilities/FlipkartBuyButton";

const ProductCard = ({product}) => {

    return (
        <>
            <div className="_product_card">
                <div className="_product_card_media">
                    <img src="/assets/imgs/utils/product-card_01.png"/>
                </div>
                <div className="_product_card_body">
                    <div className="_product_card_info">
                        <div className="_product_card_info_text">
                            <Link to={`/product-detail/${product.productId}`}>
                                <h6>
                                    {product.productName}
                                </h6>
                            </Link>
                            <p>
                                Your Snoring Solution for Restful Nights.
                            </p>
                        </div>
                        <div className="_product_card_info_price">
                            <span className="_product_card_info_price_mrp">{product.defaultPrice}</span>
                            <span className="_product_card_info_price_offer">$<span>{product.currentPrice}</span></span>
                        </div>
                    </div>
                    <div className="_product_card_buttons">
                        <FlipkartBuyButton/>
                        <AmazonBuyButton/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ProductCard;