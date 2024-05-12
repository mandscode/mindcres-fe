import { useEffect, useState } from "react";
import Accordion from "../utilities/Accordion";
import { useSelector } from "react-redux";


const FAQSection = ({product}) => {
    const [active, setActive] = useState(null);
    const [faqs, setFAQs] = useState([]);
    let faqEntries = useSelector(state => state?.FAQentries?.data?.faqEntries);
    const { data, loading, error } = useSelector((state) => state?.FAQentries);

    const handleToggle = (i) => {
        if (active === i) {
            setActive(null);
        } else {
            setActive(i);
        }
    }

    useEffect(() => {
        if (faqEntries) {
            let arr = [];
            const filteredFaqs = faqEntries.filter(faq => {
                // console.log(faq.relatedProducts, product.productCode)
               return faq.relatedProducts.includes(product.productCode)
            });
            setFAQs(filteredFaqs)
        }
        
    }, [product]);
    
    console.log(faqs)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    return (
        <>
            <section className="_faq-section">
                <div className="_faq-section_wrapper _container">
                    <div className="_faq-section_info">
                        <h4 className="_faq-section_title _sub_h2">
                        Frequently asked questions:
                        </h4>
                    </div>
                    <div className="_faq-section_body _product-detail">
                        {
                            faqs.map((faq, index) => (
                                <Accordion active={active} handleToggle={handleToggle} faq={faq}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default FAQSection;