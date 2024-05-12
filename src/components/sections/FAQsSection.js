import { useState } from "react"
import { Tab, TabContent } from "../utilities/tabs/Tab";
import { useSelector } from "react-redux";


const FAQsSection = () => {

    let faqEntries = useSelector(state => state?.FAQentries?.data?.faqEntries)
    let tabs = useSelector(state => state?.tabDetails?.data?.tabInfo)

    const [visibleTab, setVisibleTab] = useState(tabs[0]._tabId);

    return (
        <>
            <section className="_faqs-section">
                <div className="_faqs-setion_wrapper _container">
                    <div className="_faqs-setion_head">
                        <ul className="_tab_head">
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab._tabId}
                                    tab={tab}
                                    visibleTab={visibleTab}
                                    setVisibleTab={setVisibleTab}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="_faqs-setion_body">
                        <div className="_tab_body">
                            {tabs.map((tab) => (
                                <TabContent
                                    key={tab._tabId}
                                    tab={tab}
                                    visibleTab={visibleTab}
                                    faqEntries={faqEntries}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default FAQsSection;