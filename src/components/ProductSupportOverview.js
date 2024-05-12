const ProductSupportOverview = ({content}) => {

    return ( 
        <>
            <div className="_product-support-overview_wrapper">
                <h5 className="_product-support-overview_title _sub_h2">
                    {content.title}
                </h5>
                <div className="_product-support-overview_body">
                    <div className="_product-support-overview_media">
                        <img src="/assets/imgs/product-support/media.png"/>
                    </div>

                     <div className="_product-support-overview_info">
                        {
                            content?.faq && content?.faq?.map((faq, index) => (
                                <div key={index} className="_product-support-overview_info_faq">
                                    <h6 className="_product-support-overview_info_qus">{faq.qus}</h6>
                                    {
                                        typeof faq?.ans == 'object' ? 
                                            <ul className="_product-support-overview_info_ans_list">
                                                {faq?.ans && faq?.ans?.map((text, index) => (
                                                    <li key={index} className="_product-support-overview_info_ans_list_items">{text}
                                                    </li>
                                                    
                                                ))}
                                            </ul>
                                        :
                                        <p className="_product-support-overview_info_ans">
                                            {
                                                faq?.ans    
                                            } 
                                        </p>
                                    }
                                    {
                                        faq?.media ? 
                                            <figure className="_product-support-overview_info_ans_media">
                                                <img src={`/assets/imgs/utils/${faq.media}`}/>
                                            </figure>
                                        :
                                        null
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    content.sizes ? 
                        <ul className="_product-support_why-sizes_key-points" >
                            {content?.sizes && content?.sizes?.map((size, index) => (
                                <li className="_product-support_why-sizes_key-point" key={index}>
                                    <span className="_product-support_why-sizes_key-point_title">{size.title}:</span>
                                    <span className="_product-support_why-sizes_key-point_desc">{size.text}</span>
                                </li>
                            ))
                        }
                        </ul>
                        :
                        null
                    }
            </div>
        </>
    );
}
 
export default ProductSupportOverview;