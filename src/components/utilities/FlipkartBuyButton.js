const FlipkartBuyButton = ({size}) => {
    return (
        <>
            <button className={`_button ${size ? size : `_is_small`} _is_flipkart`}>
                <img src="/assets/imgs/utils/fk_buybutton.svg"/>
                <span>
                    Buy on flipkart
                </span>                    
            </button>
        </>
    );
}
 
export default FlipkartBuyButton;