import { Link } from "react-router-dom";

const Hero = ({page, title, btn, desc, navigateTo}) => {
    
    return (
        <>
            <section className={`_hero _${page}`}>
                <img className="_hero_banner" src={`./assets/imgs/${page}/hero/banner.png`}/>
                <div className="_hero_wrapper _container">
                    <div className="_hero_info">
                        {
                            title ? 
                            <>
                                <h1 className="_h1 _hero_title">
                                    {title}
                                </h1>
                            </>
                            :
                            null
                        }
                        {
                            desc ? 
                            <>
                                <p>
                                    {desc}
                                </p>
                            </>
                            :
                            null
                        }
                        {
                            btn ? 
                            <>
                                <Link to="/shop" className="_button _is_primary _is_medium">
                                    {btn}
                                </Link>
                            </>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="_hero_strap">
                    <div className="_hero_strap_wrapper">
                        <div>Silent Nights</div>
                        <div>Sleep Better</div>
                        <div>Rest Easy</div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Hero;