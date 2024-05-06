import BrandLogo from "./utilities/BrandLogo";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="_navbar">
                <div className="_container_block _navbar_wrapper">
                    <div className="_navbar_brand">
                        <BrandLogo w={145} h={58}/>
                    </div>
                    <div className="_navbar_links">
                        <div className="_navbar_link">
                            <Link to="/">Why you snore?</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/">Shop</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/">FAQs</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;