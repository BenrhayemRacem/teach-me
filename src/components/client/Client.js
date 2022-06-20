

import styles from './client.module.css'
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const Client = ()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className={styles.global}>
            <div className={styles.title}>Client Segment</div>


                <div data-aos="zoom-in-up" data-aos-easing="linear"
                     data-aos-delay="700">
                <div className={styles.content}>Children between 5 and 12.</div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="linear"
                     data-aos-delay="700">
            <div className={styles.content}>It provides them with useful information about the human body's systems.</div>
                </div>
                <div data-aos="fade-zoom-in"
                     data-aos-easing="linear"
                     data-aos-delay="700"
                     data-aos-offset="0">
                <div className={styles.imageContainer}>
                    <img src={process.env.PUBLIC_URL + "/assets/children.jpg"} alt="children" className={styles.image}/>
                </div>
                </div>

            </div>
        </>
    )
}