import { useRef } from "react";

const Accordion = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq, page } = props;



    return (
        <>
        <div className={`${page ? page : ''}`}>
            <div className={`_tab_desc_cat_body_title_wrapper ${active === faq.question ? 'active' : ''}`} onClick={() => handleToggle(faq.question)}>
                <h6 className="_tab_desc_cat_body_title">{faq.question}</h6>
            
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" style={
                        active === faq.question
                        ? { transform:'rotate(0deg)'}
                        : { transform: 'rotate(180deg)' }
                    }>
                        <path d="M4.5 16.6548L12 9.15479L19.5 16.6548" stroke="#005B4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </div>
            <div ref={contentEl} className={`_tab_desc_cat_body_text`} style={
                active === faq.question
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px", }
            }>
                <p style={{paddingTop:'36px'}}>
                    {faq.answer}
                </p>
            </div>
        </div>
        </>
    )
}
 
export default Accordion;