const ContactUs = () => {
    return (
        <>
            <section className="_contact_us">
                <div className="_contact_us_wrapper _container">
                    <div className="_contact_us_head">
                        <h1 className="_h2 _contact_us_title">
                            Contact SoreQuit
                        </h1>
                    </div>
                    <div className="_contact_us_body">
                        <div className="_contact_us_info">
                            <div className="_contact_us_typo">
                                <h6 className="_contact_us_info_title">Contact Information</h6>
                                <p className="_contact_us_info_desc">Get in touch with SnoreQuit</p>
                            </div>
                            <div className="_contact_us_details">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M20.2571 10.999H22.2571C22.2571 5.869 18.3841 2 13.2471 2V4C17.3091 4 20.2571 6.943 20.2571 10.999Z" fill="white"/>
                                        <path d="M13.2566 7.99999C15.3596 7.99999 16.2566 8.89699 16.2566 11H18.2566C18.2566 7.77499 16.4816 5.99999 13.2566 5.99999V7.99999ZM16.6786 13.443C16.4865 13.2683 16.234 13.1752 15.9744 13.1832C15.7149 13.1912 15.4686 13.2998 15.2876 13.486L12.8946 15.947C12.3186 15.837 11.1606 15.476 9.96863 14.287C8.77663 13.094 8.41563 11.933 8.30863 11.361L10.7676 8.96699C10.954 8.78612 11.0628 8.53982 11.0708 8.2802C11.0788 8.02059 10.9855 7.76804 10.8106 7.57599L7.11563 3.51299C6.94067 3.32035 6.69751 3.2035 6.43778 3.18725C6.17806 3.17101 5.92223 3.25665 5.72463 3.42599L3.55463 5.28699C3.38174 5.46051 3.27855 5.69145 3.26463 5.93599C3.24963 6.18599 2.96363 12.108 7.55563 16.702C11.5616 20.707 16.5796 21 17.9616 21C18.1636 21 18.2876 20.994 18.3206 20.992C18.5651 20.9783 18.796 20.8747 18.9686 20.701L20.8286 18.53C20.9981 18.3325 21.0839 18.0768 21.0679 17.817C21.0518 17.5573 20.9351 17.3141 20.7426 17.139L16.6786 13.443Z" fill="white"/>
                                    </svg>
                                    <a>
                                        +1012 3456 789
                                    </a>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M22.2568 4H2.25684V20H22.2568V4ZM20.2568 8L12.2568 13L4.25684 8V6L12.2568 11L20.2568 6V8Z" fill="white"/>
                                    </svg>
                                    <a>
                                    demo@gmail.com
                                    </a>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M12.2568 1.5C10.0696 1.50258 7.97268 2.3726 6.42606 3.91922C4.87945 5.46584 4.00943 7.56276 4.00684 9.75C4.00423 11.5374 4.58808 13.2763 5.66884 14.7C5.66884 14.7 5.89384 14.9963 5.93059 15.039L12.2568 22.5L18.5861 15.0353C18.6191 14.9955 18.8448 14.7 18.8448 14.7L18.8456 14.6978C19.9258 13.2747 20.5094 11.5366 20.5068 9.75C20.5043 7.56276 19.6342 5.46584 18.0876 3.91922C16.541 2.3726 14.4441 1.50258 12.2568 1.5ZM12.2568 12.75C11.6635 12.75 11.0835 12.5741 10.5901 12.2444C10.0968 11.9148 9.71227 11.4462 9.48521 10.8981C9.25814 10.3499 9.19873 9.74667 9.31449 9.16473C9.43024 8.58279 9.71597 8.04824 10.1355 7.62868C10.5551 7.20912 11.0896 6.9234 11.6716 6.80764C12.2535 6.69189 12.8567 6.7513 13.4049 6.97836C13.9531 7.20542 14.4216 7.58994 14.7513 8.08329C15.0809 8.57664 15.2568 9.15666 15.2568 9.75C15.2559 10.5453 14.9395 11.3078 14.3771 11.8702C13.8147 12.4326 13.0522 12.749 12.2568 12.75Z" fill="white"/>
                                    </svg>
                                    <p>
                                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="_contact_us_form">
                            <h6 className="_contact_us_form_title">If you have any queries, write to us directly</h6>
                            <form className="_contact_us_form_items">
                                <input
                                    placeholder="Enter email"
                                />
                                <input
                                    placeholder="Name"
                                />
                                <textarea
                                    placeholder="Write your message"
                                />
                                <button className="_button _is_primary _contact_us_form_button">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ContactUs;