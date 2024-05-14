import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

const Banner = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(isVisible == false) {
            const options = {
              root: null,
              rootMargin: '100px',
              threshold: 0.5 // Adjust this threshold as needed
            };
        
            const observer = new IntersectionObserver(([entry]) => {
              setIsVisible(entry.isIntersecting);
            }, options);
        
            if (sectionRef.current) {
              observer.observe(sectionRef.current);
            }
        
            return () => {
              if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
              }
            };
        }
    }, [isVisible]);
    
  
    return (
        <>
            <section className="_banner">
                <div className={isVisible ? '_banner_wrapper_active _banner_wrapper' : '_banner_wrapper'} ref={sectionRef}>
                    <div className={'_banner_img_wrapper'} ref={sectionRef}>
                        <img src="./assets/imgs/index/banner01.png"/>
                        <div class="overlay"></div>
                        <div className="_banner_info _banner_info_right">
                            <div class="_banner_info_wrapper ">
                                <h6 className="_banner_info_title">STOP THE SNORING</h6>
                                <div className="_banner_info_typo">
                                    <p>
                                        Is Snoring Robbing Your Sleep?
                                    </p>
                                    <ul>
                                        <li>Experiencing Exhaustion?</li>
                                        <li>Strained Relationships?</li>
                                        <li>Lacking Energy? </li>
                                        <li>Overwhelmed by Life's Demands?</li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/shop" className="_button _is_primary _is_medium">
                                Explore products
                            </Link>
                        </div>
                    </div>
                    <div className={'_banner_img_wrapper'}>
                        <img src="./assets/imgs/index/banner02.png"/>
                        <div class="overlay"></div>
                        <div className="_banner_info  _banner_info_left">
                            <div class="_banner_info_wrapper ">
                                <h6 className="_banner_info_title">STOP THE SNORING</h6>
                                <div className="_banner_info_typo">
                                    <ul>
                                        <li>Experiencing Exhaustion?</li>
                                        <li>Strained Relationships?</li>
                                        <li>Lacking Energy? </li>
                                        <li>Overwhelmed by Life's Demands?</li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/shop" className="_button _is_primary _is_medium">
                                Explore products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Banner;