import styles from "./banner.module.css"


export const Banner = ()=>{


    return (
        <>

            <div className={styles.banner}>
                <video src={process.env.PUBLIC_URL +'banner.mp4'} controls={false} autoPlay muted loop  >
                </video>
            </div>
        </>
    )
}