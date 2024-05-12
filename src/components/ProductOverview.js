import AmazonBuyButton from "./utilities/AmazonBuyButton";
import FlipkartBuyButton from "./utilities/FlipkartBuyButton";
import MediaCard from "./utilities/MediaCard";

const ProductOverview = ({product, productFeatures}) => {

    return (
        <>
            <section className="_product-overview">
                <div className="_container _product-overview_wrapper">
                    {/* <div className="_product-overview_breadcrumb">Home / <Link className="_brand_logo" to='/'>Shop All Products</Link> / {product.name} </div> */}
                    <div className="_product-overview_body">
                        <div className="_product-overview_media">
                            <img src={`/assets/imgs/utils/${productFeatures.img}`}/>
                        </div>
                        <div className="_product-overview_info">
                            <h1 className="_h2 _product-overview_title">{product.productName}</h1>
                            <div className="_product-overview_desc">
                                <p className="_product-overview_desc_typo">
                                    Description
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="18" height="18" 
                                        viewBox="0 0 26 26" fill="none"
                                        style={{transform:'rotate(180deg)'}}
                                    >
                                        <path d="M4.5 16.6548L12 9.15479L19.5 16.6548" stroke="#515151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </p>
                                <div className="_product-overview_desc_detail">
                                    {productFeatures?.desc?.desc ? <p className="_product-overview_desc_text">{productFeatures.desc.desc}</p> : ''}
                                    {productFeatures?.desc?.key_points ? <>
                                        <ul className="_product-overview_desc_key-points" style={{paddingBottom:'25px'}}>
                                            {
                                              productFeatures?.desc?.key_points && productFeatures?.desc?.key_points.map((list, index) => (
                                                    <li className="_product-overview_desc_key-point" key={index}>
                                                        {list?.title ? <span className="_product-overview_desc_key-point_title">{list.title} - &nbsp;</span> : ""}
                                                        
                                                        {list?.desc ? <p>{list.desc}</p> : ""}
                                                    </li>
                                              ))  
                                            }
                                        </ul>
                                    </>: ""}
                                    {productFeatures?.desc?.footer_desc !== 'NA' ? <p className="_product-overview_desc_footer_text">{productFeatures?.desc?.footer_desc}</p> : ''}
                                </div>
                            </div>
                            <div className="_product-overview_price">
                                <span className="_product-overview_price_mrp">{product.defaultPrice}</span>
                                <span className="_product-overview_price_offer">$<span>{product.currentPrice}</span></span>
                            </div>
                            <div className="_product-overview_buttons">
                                <FlipkartBuyButton size="_is_large"/>
                                <AmazonBuyButton size="_is_large"/>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    {
                        product?.shortDescription !== "Single pack product" 
                        ? 
                            <div className="_product-overview_why-sizes">
                                <h6 className="_product-overview_why-sizes_title">
                                    Why we offer 2 sizes
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="18" height="18" 
                                        viewBox="0 0 26 26" fill="none"
                                        style={{transform:'rotate(180deg)'}}
                                    >
                                        <path d="M4.5 16.6548L12 9.15479L19.5 16.6548" stroke="#515151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </h6>
                                <ul className="_product-overview_why-sizes_key-points">
                                    <li className="_product-overview_why-sizes_key-point">
                                        <span className="_product-overview_why-sizes_key-point_title">Size 1:</span>
                                        <span className="_product-overview_why-sizes_key-point_desc">Provides a slight jaw advancement (+2mm).</span>
                                    </li>
                                    <li className="_product-overview_why-sizes_key-point">
                                        <span className="_product-overview_why-sizes_key-point_title">Size 2:</span>
                                        <span className="_product-overview_why-sizes_key-point_desc">Offers a slightly greater jaw advancement (+6mm). Test both to determine which effectively stops your snoring.</span>
                                    </li>
                                </ul>
                            </div>
                        :
                        null
                    }
                    <div className="_product-overview_media_key-points">
                        <MediaCard page="_product-detail" img="whysnore_01.png" typo="Turbulent snoring noise due to airway collapse"/>
                        <MediaCard page="_product-detail" img="whysnore_01.png" typo="Size 1 slightly advances jaw, maintaining airway"/>
                        <MediaCard page="_product-detail" img="whysnore_01.png" typo="Size 2 advances jaw further, ensuring open airway"/>
                    </div>
                    <div className="_product-overview_buttons_on-bottom">
                        <FlipkartBuyButton size="_is_medium"/>
                        <AmazonBuyButton size="_is_medium"/>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ProductOverview;