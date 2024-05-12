import DetailedProductCard from "../components/DetailedProductCard";
import AboutSnoreQuit from "../components/sections/AboutSnoreQuit";
import Banner from "../components/sections/Banner";
import Hero from "../components/sections/Hero";
import ProductCarousel from "../components/sections/ProductCarousel";
import ReviewCardsSection from "../components/sections/ReviewCardsSection";
import ReviewVideo from "../components/sections/ReviewVideo";
import SleepSolutionsDownloadSubscribe from "../components/sections/SleepSolutionsDownloadSubscribe";
import SnoringSolutions from "../components/sections/SnoringSolutions";

const Index = () => {

    let content = {
        page : "index", 
        title: "Say Goodbye to Snoring!", 
        btn : "Explore",
        navigateTo:"/shop",
        desc : null
    }

    let contentA = {
        page : "index", 
        title: "Your Key to Good Sleep",
    }
    
    return (
        <>
            <main>
                <Hero {...content}/>
                <SnoringSolutions/>
                <ProductCarousel {...contentA}/>
                <Banner/>
                <AboutSnoreQuit/>
                <DetailedProductCard/>
                <ReviewCardsSection/>
                <ReviewVideo/>
                <SleepSolutionsDownloadSubscribe/> 
            </main>
        </>
    );
}

// productID : 

// productCode: 

// defaultPrice:

// sellingPrice:

// availabile:

// launchDate:

// endDate:

// isProducthidden:

// productTitle:

// productShortDesc:
 
export default Index;