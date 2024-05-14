import { useEffect, useState } from "react";

const UpwardArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Show after 300px of scrolling
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 5,
          behavior: 'smooth'
        });
    };

    return (
        <>
            <button className="_upward-arrow">
                {isVisible && (
                    <div className="_upward-arrow_wrapper" onClick={scrollToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6742 1.07896C12.4064 0.346727 13.5936 0.346727 14.3258 1.07896L24.9508 11.704C25.6831 12.4362 25.6831 13.6234 24.9508 14.3556C24.2186 15.0878 23.0314 15.0878 22.2992 14.3556L13 5.05644L3.70083 14.3556C2.96859 15.0878 1.78141 15.0878 1.04917 14.3556C0.316942 13.6234 0.316942 12.4362 1.04917 11.704L11.6742 1.07896Z" fill="#FFEECA"/>
                        </svg>
                    </div>
                )}
            </button>
        </>
    );
}
 
export default UpwardArrow;