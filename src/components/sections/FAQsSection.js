import { useState } from "react"
import { Tab, TabContent } from "../utilities/tabs/Tab";


const FAQsSection = () => {
    
    const data = [
        {
            id : 1,
            tabTitle: "General Info",
            tabContent: [
                {
                    heading: 'Mouthpieces',
                    desc: [
                        {
                            title:'How soon should I expect to see results with a SnoreQuit Mouthpiece?',
                            text:'Expect to experience results from the first night of use. Optimal effectiveness is achieved after determining which jaw advancement (Comfort 1 or Comfort 2) suits you best.'
                        },
                        {
                            title:'Is there any setup involved with the SnoreQuit Mouthpiece?',
                            text:'There is no setup involved. You can simply take it out of the case and use it. Start with the Comfort 1 device. If your snoring persists then use the Comfort 2 device which will widen the airway slightly more.'
                        }
                    ]
                },
                {
                    heading: 'Troubleshooting',
                    desc: [
                        {
                            title:'The SnoreQuit Mouthpiece pops out of my mouth. What can I do?',
                            text:"If you're new to using a SnoreQuit Mouthpiece, allow some adjustment time. It's common to involuntarily remove the mouthpiece while sleeping initially, but this will diminish with continued use. If the issue persists, consider using a chin strap to stabilize the jaw and maintain the mouthpiece in position."
                        },
                        {
                            title:'The SnoreQuit Mouthpiece makes me drool more than usual. Is this normal and how long will it last',
                            text:'Drooling is a typical concern for numerous users and often diminishes over time. The body naturally produces more saliva when a device is in the mouth. Typically, within a span of 2 days to 2 weeks, most users find that drooling ceases, and they attain optimal comfort with their SnoreQuit Mouthpiece.'
                        }
                    ]
                }
            ]
        },
        {
            id : 2,
            tabTitle: "Anti-Snoring Mouthpieces",
            tabContent: [
                {
                    heading: 'Mouthpieces--2',
                    desc: [
                        {
                            title:'How soon should I expect to see results with a SnoreQuit Mouthpiece?',
                            text:'Expect to experience results from the first night of use. Optimal effectiveness is achieved after determining which jaw advancement (Comfort 1 or Comfort 2) suits you best.'
                        },
                        {
                            title:'Is there any setup involved with the SnoreQuit Mouthpiece?',
                            text:'There is no setup involved. You can simply take it out of the case and use it. Start with the Comfort 1 device. If your snoring persists then use the Comfort 2 device which will widen the airway slightly more.'
                        }
                    ]
                },
                {
                    heading: 'Troubleshooting',
                    desc: [
                        {
                            title:'The SnoreQuit Mouthpiece pops out of my mouth. What can I do?',
                            text:"If you're new to using a SnoreQuit Mouthpiece, allow some adjustment time. It's common to involuntarily remove the mouthpiece while sleeping initially, but this will diminish with continued use. If the issue persists, consider using a chin strap to stabilize the jaw and maintain the mouthpiece in position."
                        },
                        {
                            title:'The SnoreQuit Mouthpiece makes me drool more than usual. Is this normal and how long will it last',
                            text:'Drooling is a typical concern for numerous users and often diminishes over time. The body naturally produces more saliva when a device is in the mouth. Typically, within a span of 2 days to 2 weeks, most users find that drooling ceases, and they attain optimal comfort with their SnoreQuit Mouthpiece.'
                        }
                    ]
                }
            ]
        },
        {
            id : 3,
            tabTitle: "Other Solutions",
            tabContent: [
                {
                    heading: 'Mouthpieces--3',
                    desc: [
                        {
                            title:'How soon should I expect to see results with a SnoreQuit Mouthpiece?',
                            text:'Expect to experience results from the first night of use. Optimal effectiveness is achieved after determining which jaw advancement (Comfort 1 or Comfort 2) suits you best.'
                        },
                        {
                            title:'Is there any setup involved with the SnoreQuit Mouthpiece?',
                            text:'There is no setup involved. You can simply take it out of the case and use it. Start with the Comfort 1 device. If your snoring persists then use the Comfort 2 device which will widen the airway slightly more.'
                        }
                    ]
                },
                {
                    heading: 'Troubleshooting',
                    desc: [
                        {
                            title:'The SnoreQuit Mouthpiece pops out of my mouth. What can I do?',
                            text:"If you're new to using a SnoreQuit Mouthpiece, allow some adjustment time. It's common to involuntarily remove the mouthpiece while sleeping initially, but this will diminish with continued use. If the issue persists, consider using a chin strap to stabilize the jaw and maintain the mouthpiece in position."
                        },
                        {
                            title:'The SnoreQuit Mouthpiece makes me drool more than usual. Is this normal and how long will it last',
                            text:'Drooling is a typical concern for numerous users and often diminishes over time. The body naturally produces more saliva when a device is in the mouth. Typically, within a span of 2 days to 2 weeks, most users find that drooling ceases, and they attain optimal comfort with their SnoreQuit Mouthpiece.'
                        }
                    ]
                }
            ]
        },
        {
            id : 4,
            tabTitle: "Information on Snoring",
            tabContent: [
                {
                    heading: 'Mouthpieces--4',
                    desc: [
                        {
                            title:'How soon should I expect to see results with a SnoreQuit Mouthpiece?',
                            text:'Expect to experience results from the first night of use. Optimal effectiveness is achieved after determining which jaw advancement (Comfort 1 or Comfort 2) suits you best.'
                        },
                        {
                            title:'Is there any setup involved with the SnoreQuit Mouthpiece?',
                            text:'There is no setup involved. You can simply take it out of the case and use it. Start with the Comfort 1 device. If your snoring persists then use the Comfort 2 device which will widen the airway slightly more.'
                        }
                    ]
                },
                {
                    heading: 'Troubleshooting',
                    desc: [
                        {
                            title:'The SnoreQuit Mouthpiece pops out of my mouth. What can I do?',
                            text:"If you're new to using a SnoreQuit Mouthpiece, allow some adjustment time. It's common to involuntarily remove the mouthpiece while sleeping initially, but this will diminish with continued use. If the issue persists, consider using a chin strap to stabilize the jaw and maintain the mouthpiece in position."
                        },
                        {
                            title:'The SnoreQuit Mouthpiece makes me drool more than usual. Is this normal and how long will it last',
                            text:'Drooling is a typical concern for numerous users and often diminishes over time. The body naturally produces more saliva when a device is in the mouth. Typically, within a span of 2 days to 2 weeks, most users find that drooling ceases, and they attain optimal comfort with their SnoreQuit Mouthpiece.'
                        }
                    ]
                }
            ]
        }
    ]

    const [visibleTab, setVisibleTab] = useState(data[0].id);

    return (
        <>
            <section className="_faqs-section">
                <div className="_faqs-setion_wrapper _container">
                    <div className="_faqs-setion_head">
                        <ul className="_tab_head">
                            {data.map((item) => (
                                <Tab
                                    key={item.id}
                                    item={item}
                                    visibleTab={visibleTab}
                                    setVisibleTab={setVisibleTab}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="_faqs-setion_body">
                        <div className="_tab_body">
                            {data.map((item) => (
                                <TabContent
                                    key={item.id}
                                    item={item}
                                    visibleTab={visibleTab}
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