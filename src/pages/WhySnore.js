import Hero from "../components/sections/Hero";
import ProductGrid from "../components/sections/ProductGrid";
import WhySnoreSection from "../components/sections/WhySnoreSection";

const WhySnore = () => {
    return (
        <>
            <Hero page={'whysnore'} title={`Why you snore?`} desc={`Lets Explore the Science Behind the Solutions`}/>
            <WhySnoreSection/>
            <ProductGrid/>
        </>
    );
}
 
export default WhySnore;