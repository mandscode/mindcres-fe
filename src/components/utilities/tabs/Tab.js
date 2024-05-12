import { useState } from "react";
import Accordion from "../Accordion";

export const Tab = ({ tab, visibleTab, setVisibleTab }) => (
    <span
      onClick={() => setVisibleTab(tab._tabId)}
      className={visibleTab === tab._tabId ? "_tab_title _tab_title--active" : "_tab_title"}
    >
      {tab.tabName}
    </span>
);

export const TabContent = ({ tab, visibleTab, faqEntries }) => {

    const [active, setActive] = useState(null);
    const handleToggle = (i) => {
        if (active === i) {
            setActive(null);
        } else {
            setActive(i);
        }
    }

    return (
        <div className="_tab_desc" style={visibleTab === tab._tabId ? {} : { display: 'none' }}>
            {
                tab?.sections?.length > 0 ? 
                tab?.sections && tab?.sections?.map((section, index) => (
                    <div className="_tab_desc_cat" key={index}>
                        <h4 className="_tab_desc_cat_title _sub_h2">{section.sectionName}</h4>
                        {
                            faqEntries.filter(entry => entry.associatedTabs.includes(tab._tabId) && entry.sections.includes(section.sectionCode)).map(entry => (
                                <div key={entry._id} className="_tab_desc_cat_body_faq">
                                    <Accordion active={active} handleToggle={handleToggle} faq={entry} />
                                </div>
                            ))
                        }
                    </div>
                ))
                :
                null
            }
        </div>
    )
};