
import styles from './product.module.css'
import { Grid} from "@mui/material";
import {ProductCard} from "../cards/ProductCard";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Product = ()=> {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <>
            <div className={styles.global}>
            <div className={styles.title}>
                Our design
            </div>

                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    <Grid  item xs={10} md={4}>


                        <div data-aos="flip-left" data-aos-easing="linear"
                             data-aos-duration="1000">


                        <ProductCard image={'/assets/product2.png'} title={'FRONT VIEW'} content={''}/>
                        </div>
                    </Grid>
                    <Grid  item xs={10} md={4}>
                        <div data-aos="flip-right" data-aos-easing="linear"
                             data-aos-duration="1000">
                        <ProductCard image={'/assets/product1.png'} title={'RIGHT VIEW'} content={''}/>
                        </div>
                    </Grid>

                </Grid>


                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">


                <div className={styles.content}>
                    We designed Teachme as a 3D projector kit in order to convert the information into an interactive source for the child. Explanatory videos about each system are available and saved in a USB disk styled according to the system it represents.
                    More infos about how to use the device are accessible in 'how to use' section
                </div>

                </div>

            </div>

        </>
    )
}