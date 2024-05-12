import ProductSupportOverview from "../ProductSupportOverview";



const ProductSupportSection = () => {
    let faq = [
        {
            _id:1,
            title:'Tips to get started',
            media:'faq.png',
            faq:[
                {
                    qus:'Set your expectation',
                    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.'
                },
                {
                    qus:'Try it first when you’re awake.',
                    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.'
                },
                {
                    qus:' Work toward a full night’s use.',
                    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.'
                }
            ]
        },
        {
            _id:2,
            title:'Mouthpiece sizing guide',
            media:'product-card_01.png',
            faq:[
                {
                    qus:'Set your expectation',
                    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.',
                    media:'product-card_01.png'
                },
                {
                    qus:'Try it first when you’re awake.',
                    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.'
                },
                {
                    qus:' Work toward a full night’s use.',
                    ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis.'
                }
            ],
            sizes:[
                {
                    title:'Size 1',
                    text:'Provides a slight jaw advancement (+2mm).'
                },
                {
                    title:'Size 2',
                    text:': Offers a slightly greater jaw advancement (+6mm). Test both to determine which effectively stops your snoring.'
                }
            ]
        },
        {
            _id:3,
            title:'Mouthpiece Care & Replacement',
            media:'faq.png',
            faq:[
                {
                    qus:'How to clean your mouthpiece',
                    ans:[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Et malesuada fames ac turpis.',
                        'Egestas dui id ornare arcu. Iaculis nunc sed augue lacus viverra vitae congue eu.',
                        'Nisl tincidunt eget nullam non nisi. Suscipit tellus mauris a diam maecenas sed enim ut.',
                        'Nec nam aliquam sem et tortor consequat id.'
                    ]
                },
                {
                    qus:'Try it first when you’re awake.',
                    ans:[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Et malesuada fames ac turpis.',
                        'Egestas dui id ornare arcu. Iaculis nunc sed augue lacus viverra vitae congue eu.',
                        'Nisl tincidunt eget nullam non nisi. Suscipit tellus mauris a diam maecenas sed enim ut.',
                        'Nec nam aliquam sem et tortor consequat id.'
                    ]
                }
            ]
        }
    ]
    return (
        <>
            <section className="_product-support">
                <div className="_product-support_wrapper _container">
                    <div className="_product-support_head">
                        <h1 className="_product-support_title _h2">
                            SnoreQuit Product Support
                        </h1>
                        <ul className="_product-support_nav">
                            <li className="_product-support_nav_item">
                            Tips to get started
                            </li>
                            <li className="_product-support_nav_item">
                            Mouthpiece sizing guide
                            </li>
                            <li className="_product-support_nav_item">
                            Mouthpiece care & Replacement
                            </li>
                            <li className="_product-support_nav_item">
                            Free Tips for better sleep
                            </li>
                        </ul>
                    </div>
                    <div className="_product-support_body">
                        {faq && faq.map((section, index) => (
                            <div className="_product-support-overview" key={index}>
                                <ProductSupportOverview content={section}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ProductSupportSection;