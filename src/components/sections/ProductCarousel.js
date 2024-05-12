import ProductCard from "../ProductCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useEffect } from "react";
import { useSelector } from 'react-redux';

const ProductCarousel = ({title}) => {
    let products = useSelector(state => state?.data?.data?.products)

    return (
        <>
            <section className="_product-carousel">
                <div className="_product-carousel_wrapper _container">
                    <div className="_product-carousel_info">
                        <h3 className="_product-carousel_info_title _sub_h2">
                            Your Key to Good Sleep
                        </h3>
                    </div>
                    <Splide 
                        options={{
                            type: "loop",
                            gap: "70px",
                            drag: "free",
                            arrows: false,
                            focus: 'center',
                            pagination: false,
                            breakpoints: {
                                576: {
                                    perPage: 3,
                                },
                                768: {
                                    perPage: 3,
                                },
                                991: {
                                    perPage: 3,
                                },
                                1440: {
                                    perPage: 3,
                                },
                                1920: {
                                    perPage: 3,
                                },
                                2160: {
                                    perPage: 3,
                                },
                                2560: {
                                    perPage: 3,
                                },
                                3840: {
                                    perPage: 3,
                                },
                                6400: {
                                    perPage: 3,
                                },
                            },
                            autoScroll: {
                                pauseOnHover: true,
                                pauseOnFocus: false,
                                rewind: false,
                                speed: 0.8,
                            },
                        }}
                        extensions={{ AutoScroll }}
                    >
                        {
                            products && products.map((product, index) => (
                                <SplideSlide key={index}>
                                    <ProductCard product={product}/>
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
            </section>
        </>
    );
}
 
export default ProductCarousel;