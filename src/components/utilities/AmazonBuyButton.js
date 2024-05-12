const AmazonBuyButton = ({size}) => {
    return (
        <>
            <button className={`_button ${size ? size : `_is_small`} _is_amazon`}>
                <img src="/assets/imgs/utils/amz_buybutton.svg"/>
                <span>
                    Buy on Amazon
                </span>                    
            </button>
        </>
    );
}
 
export default AmazonBuyButton;