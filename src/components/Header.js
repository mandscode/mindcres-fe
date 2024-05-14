import { useEffect, useLayoutEffect, useState } from "react";
import BrandLogo from "./utilities/BrandLogo";
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation();
    const [activePage, setActivePage] = useState();
  
    useLayoutEffect(() => {
        setActivePage(pathname)
    }, [pathname])

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
                            <Link to="/why-snore" style={{ fontWeight: activePage === '/why-snore' ? '700' : 'normal' }}>Why you snore?</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/shop"  style={{ fontWeight: activePage === '/shop' ? '700' : 'normal' }}>Shop</Link>
                        </div>
                        <div className="_navbar_link">
                            <Link to="/faq-s" style={{ fontWeight: activePage === '/faq-s' ? '700' : 'normal' }}>FAQs</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;