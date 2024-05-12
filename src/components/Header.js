import { useState } from "react";
import BrandLogo from "./utilities/BrandLogo";
import { Link } from 'react-router-dom'

const Header = () => {
    const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || 'home');

    const handlePageChange = (page) => {
        setActivePage(page);
        localStorage.setItem('activePage', page);
      };

    return (
        <>
            <header className="_navbar">
                <div className="_container_block _navbar_wrapper">
                    <div className="_navbar_brand">
                        <Link to="/" onClick={() => handlePageChange('')}>
                            <BrandLogo fill="#005B4C" w={145} h={58}/>
                        </Link>
                    </div>
                    <div className="_navbar_links">
                        <div className="_navbar_link">
                            <Link to="/why-snore" style={{ fontWeight: activePage === 'why' ? '700' : 'normal' }} onClick={() => handlePageChange('why')}>Why you snore?</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/shop"  style={{ fontWeight: activePage === 'shop' ? '700' : 'normal' }} onClick={() => handlePageChange('shop')}>Shop</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/faq-s" style={{ fontWeight: activePage === 'faq' ? '700' : 'normal' }} onClick={() => handlePageChange('faq')}>FAQs</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;