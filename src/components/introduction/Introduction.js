import {Grid} from "@mui/material";
import styles from "./introduction.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export const Introduction = ()=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>



            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>


                    <div data-aos="fade-right"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="500"
                    >


                    <div className={styles.title}>Value proposition</div>
                    </div>

                     <div data-aos="fade-right"
                          data-aos-easing="ease-in-sine"
                          data-aos-duration="500"
                    >
                    <div className={styles.content}>teachme is a device created
                        in order to be a representative bridge
                        between the child's inner world
                        and the educational system
                    </div>
                    </div>

                    <div data-aos="fade-right"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="500"
                    >
                    <div className={styles.title}>Our goal</div>
                    </div>
                    <div data-aos="fade-right"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="500"
                    >
                    <div className={styles.content}>  Although the rigid and theory-based programs mutes the reflexion
                        and the motivation of children to learn from an early age, this device
                        is designed to nurture and develop the children's imagination and curiosity in an educative way.
                        It's an ultimate solution to keep in the children the desire to learn and provide them with coherent
                        and faithful information that suit perfectly their cognitive skills.
                    </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div data-aos="fade-left"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="500"
                    >
                    <img src={ process.env.PUBLIC_URL + '/assets/imagination.jpg'} alt="imagination"/>
                    </div>
                </Grid>
            </Grid>
        </>
    )

}