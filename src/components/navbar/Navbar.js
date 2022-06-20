import styles from "./navbar.module.css"
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";



    export const Navbar = ()=> {
        const [openNav,setOpenNav] = useState(false)
        const isActive = openNav? `${styles.header} ${styles.activeHeader}` : `${styles.header}`
        const handleOpen = ()=>setOpenNav(true)
        const handleClose = ()=>setOpenNav(false)

        return (
            <>
                <div className={isActive}>
                    {openNav && (
                        <div className={styles.bars} onClick={handleClose}><CloseIcon sx={{color:'#284D79' , fontSize:32}}/></div>

                    )}
                    <a href="#" > <img src={process.env.PUBLIC_URL+"/assets/logo.png"} alt="Logo" className={styles.logo}/></a>

                    <div className={styles.display}>


                        <ul >
                            <li>   <a href="#">teach me</a> </li>
                            <li>   <a href="#">How to use</a> </li>
                            <li><a href="#">Shopping</a></li>
                            <li><a href="#">Basket</a></li>
                            <li><a href="#">Contact Us </a></li>

                        </ul>

                    </div>

                    {!openNav && (
                        <div className={styles.bars} onClick={handleOpen}><HorizontalSplitIcon sx={{color:'#000' , fontSize:32}}/></div>

                    )}
                </div>
            </>
        )
}