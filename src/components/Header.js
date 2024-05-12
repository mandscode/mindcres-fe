import BrandLogo from "./utilities/BrandLogo";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="_navbar">
                <div className="_container_block _navbar_wrapper">
                    <div className="_navbar_brand">
                        <Link to="/">
                            <BrandLogo fill="#005B4C" w={145} h={58}/>
                        </Link>
                    </div>
                    <div className="_navbar_links">
                        <div className="_navbar_link">
                            <Link to="/why-snore">Why you snore?</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/shop">Shop</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/faq-s">FAQs</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;