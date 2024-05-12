import AmazonBuyButton from "../utilities/AmazonBuyButton";
import FlipkartBuyButton from "../utilities/FlipkartBuyButton";
import MediaCard from "../utilities/MediaCard";

const WhySnoreSection = () => {
    return (
        <>
            <section className="_why-snore_section">
                <div className="_why-snore_section_wrapper _container">
                    <div className="_why-snore_section_info">

                        <div className="_why-snore_section_info_wrapper">
                            <h6 className="_why-snore_section_title">
                                What are the causes
                            </h6>
                            <div className="_why-snore_section_des">
                                <span>
                                    Snoring occurs when turbulent air vibrates the soft tissues in your airway. During sleep, throat and nasal tissues relax, and the tongue collapses, narrowing the airway and causing turbulence.
                                </span>
                                <span>
                                Various factors, such as age, weight gain, alcohol and tobacco use, and sleep position, can contribute to snoring. However, effective solutions focus on widening and keeping the airway clear of obstruction and turbulent air, regardless of contributing factors.
                                </span>
                            </div>
                        </div>
                        
                        <div className="_why-snore_section_role">
                            <h6 className="_why-snore_section_title">
                            Our role
                            </h6>
                            <div className="_why-snore_section_des">
                            The SnoreQuit anti-snoring mouthpiece tackles snoring at its core. Through gentle advancement of the lower jaw, it widens the throat's airway, halting tissue vibration and reducing snoring noise. Supported by extensive research, SnoreQuit's mouthpiece is effective immediately.
                            </div>

                            <div className="_why-snore_section_media">
                                    <div className="_why-snore_section_media_wrapper">
                                        <MediaCard img="whysnore_01.png" typo="Restricted Airway Causes Snoring"/>
                                        <MediaCard img="whysnore_02.png" typo="SnoreQuit Opens the Airway To Stop Snoring"/>
                                    </div>
                                    <div className="_why-snore_section_media_buttons">
                                        <FlipkartBuyButton size="_is_medium"/>
                                        <AmazonBuyButton size="_is_medium"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="_why-snore_section_effects">
                        <h6 className="_why-snore_section_title">
                        The Health Effects of Snoring
                        </h6>
                        <div className="_why-snore_section_des">
                            <span>
                            Snoring affects your sleep quality, leading to various negative outcomes. Sleep deprivation can result in weight gain, mood disturbances, reduced focus, accidents, work inefficiency, and strained relationships. Furthermore, snoring is linked to health issues like high blood pressure, heart disease, diminished sexual function, diabetes, and stroke. Additionally, snoring also impacts the sleep quality of bed partners, with an average loss of one hour of sleep per night.
                            </span>
                            <span>
                            Furthermore, the repetitive vibration of tissues in the airway during snoring can cause inflammation and irritation, leading to a sore throat, dry mouth, and headaches. Over time, this chronic irritation may even contribute to the development of more serious conditions like chronic obstructive pulmonary disease (COPD) or asthma.
                            </span>
                            <span>
                            SnoreQuit was established in 2024 with the launch of its first snoring solution: the SnoreQuit mouthpiece, developed in collaboration with dental and medical professionals. This FDA-cleared device has assisted millions in eliminating snoring.
                            </span>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
}
 
export default WhySnoreSection;