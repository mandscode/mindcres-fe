import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const ReviewCardsSection = ({title = undefined, desc = undefined, page = undefined}) => {
    return (
        <>
            <section className={`_testimonial ${page != undefined ? page : ''}`}>
                <div className="_testimonial_wrapper">
                    <div className="_testimonial_info">
                        <h3 className="_testimonial_title _sub_h2">
                            {
                                title != undefined ? title : 'Crafting the Sleep Experience You Deserve'
                            }
                        </h3>
                        <p className="_testimonial_desc">
                            {
                                desc != undefined ? desc : 'Our customers are enjoying improved sleep and waking up refreshed and joyful.'
                            }
                        </p>
                    </div>
                    <div className="_testimonial_cards_wrapper">
                        <Splide 
                            options={{
                                type: "loop",
                                gap: "30px",
                                drag: "free",
                                arrows: false,
                                focus: 'center',
                                pagination: false,
                                breakpoints: {
                                    576: {
                                        perPage: 3,
                                    },
                                    768: {
                                        perPage: 3,
                                    },
                                    991: {
                                        perPage: 3,
                                    },
                                    1440: {
                                        perPage: 3,
                                    },
                                    1920: {
                                        perPage: 3,
                                    },
                                    2160: {
                                        perPage: 3,
                                    },
                                    2560: {
                                        perPage: 3,
                                    },
                                    3840: {
                                        perPage: 3,
                                    },
                                    6400: {
                                        perPage: 3,
                                    },
                                },
                                autoScroll: {
                                    pauseOnHover: true,
                                    pauseOnFocus: false,
                                    rewind: false,
                                    speed: 0.8,
                                },
                            }}
                            extensions={{ AutoScroll }}
                        >
                            <SplideSlide>
                                <div className="_testimonial_card">
                                    <h6 className="_testimonial_card_title">
                                        Amazing product
                                        <div className="_testimonial_card_rating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#BAA989"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#BAA989"/>
                                            </svg>
                                        </div>
                                    </h6>
                                    <p className="_testimonial_card_review">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.”
                                    </p>
                                    <span className="_testimonial_card_author">
                                        Yuiop asdfgh
                                    </span>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="_testimonial_card">
                                    <h6 className="_testimonial_card_title">
                                        Amazing product
                                        <div className="_testimonial_card_rating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#BAA989"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#BAA989"/>
                                            </svg>
                                        </div>
                                    </h6>
                                    <p className="_testimonial_card_review">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.”
                                    </p>
                                    <span className="_testimonial_card_author">
                                        Yuiop asdfgh
                                    </span>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="_testimonial_card">
                                    <h6 className="_testimonial_card_title">
                                        Amazing product
                                        <div className="_testimonial_card_rating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#005B4C"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#BAA989"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                <path d="M17.1523 0.303345L20.8568 11.7046H32.8448L23.1463 18.7509L26.8508 30.1521L17.1523 23.1058L7.45389 30.1521L11.1584 18.7509L1.45991 11.7046H13.4479L17.1523 0.303345Z" fill="#BAA989"/>
                                            </svg>
                                        </div>
                                    </h6>
                                    <p className="_testimonial_card_review">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.”
                                    </p>
                                    <span className="_testimonial_card_author">
                                        Yuiop asdfgh
                                    </span>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ReviewCardsSection;