import { useState } from "react";
import Accordion from "../Accordion";

export const Tab = ({ item, visibleTab, setVisibleTab }) => (
    <span
      onClick={() => setVisibleTab(item.id)}
      className={visibleTab === item.id ? "_tab_title _tab_title--active" : "_tab_title"}
    >
      {item.tabTitle}
    </span>
);

export const TabContent = ({ item, visibleTab }) => {

    const [active, setActive] = useState(null);
    const handleToggle = (i) => {
        if (active === i) {
            setActive(null);
        } else {
            setActive(i);
        }
    }

    return (
        
        <div style={visibleTab === item.id ? {} : { display: 'none' }} className="_tab_desc">
          {
            item?.tabContent.length > 0 ?
            item?.tabContent && item?.tabContent.map((descCat, index) => (
                <div className="_tab_desc_cat" key={index}>
                    {
                        descCat?.heading ? 
                        <h4 className="_tab_desc_cat_title _sub_h2">{descCat?.heading}</h4>
                        :
                        null
                    }
                    {
                      descCat?.desc.length > 0 ? 
                        <div className="_tab_desc_cat_body">
                            {
                                descCat?.desc && descCat.desc.map((desc, i) => (
                                    <div key={i} className="_tab_desc_cat_body_faq">
                                        {
                                            desc.text ?
                                                <Accordion active={active} handleToggle={handleToggle} faq={desc} />
                                            :
                                            null
                                        }
    
                                    </div>
                                ))
                            }
                        </div>
                      :
                      null  
                    }
                </div>
            )) : null
          }
        </div>
    )
};