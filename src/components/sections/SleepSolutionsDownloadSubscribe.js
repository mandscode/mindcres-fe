const SleepSolutionsDownloadSubscribe = ({page = undefined}) => {
    return (
        <>
            <section className={`_sleep_solutions_download_subscribe ${page == undefined ? '' : page }`}>
                <div className="_sleep_solutions_download_subscribe_wrapper _container">
                    <div className="_sleep_solutions_download_subscribe_media">
                        <img src="./assets/imgs/index/subscribe_01.jpeg"/>
                    </div>
                    <div className="_sleep_solutions_download_subscribe_body">
                        <div className="_sleep_solutions_download_subscribe_info">
                            <h6 className="_sleep_solutions_download_subscribe_info_title">
                            Download for free
                            </h6>
                            <p className="_sleep_solutions_download_subscribe_info_text">
                            25 solutions for better sleep
                            </p>
                        </div>
                        <div className="_sleep_solutions_download_subscribe_form_wrapper">
                            <label className="_sleep_solutions_download_subscribe_form_label">
                            Enter your email below for your free e-book!
                            </label>
                            <form className="_sleep_solutions_download_subscribe_form">
                                <input 
                                    className="_sleep_solutions_download_subscribe_form_input"
                                    placeholder="Enter email"
                                    value=""
                                />
                                
                                <button className="_sleep_solutions_download_subscribe_form_button _button _is_large _is_primary">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default SleepSolutionsDownloadSubscribe;