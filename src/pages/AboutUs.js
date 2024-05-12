import AboutUsSection from "../components/sections/AboutUsSection";
import Hero from "../components/sections/Hero";
import SleepSolutionsDownloadSubscribe from "../components/sections/SleepSolutionsDownloadSubscribe";

const AboutUs = () => {
    return (
        <>
            <Hero page={'aboutus'} title={`About SnoreQuit`}/>
            <AboutUsSection/>
            <SleepSolutionsDownloadSubscribe page="_about-us"/>
        </>
    );
}
 
export default AboutUs;