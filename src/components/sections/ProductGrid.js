import ProductCard from "../ProductCard";
import { useSelector } from 'react-redux';

const ProductGrid = ({title}) => {
    let products = useSelector(state => state?.data?.data?.products)

    return (
        <>
            <section className="_product-grid">
                <div className="_product-grid_wrapper _container">
                    <div className="_product-grid_info">
                        <h3 className="_product-grid_info_title _sub_h2">
                            Explore Our Range of Snoring Solutions
                        </h3>
                    </div>
                    <div className="_product-grid_list">
                        {
                            products && products.map((product, index) => (
                                <ProductCard className="_product-grid_item" product={product}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ProductGrid;