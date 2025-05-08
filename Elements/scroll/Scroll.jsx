import React  from "react";
import styles from "./scroll.module.css";
import image1 from "@/public/IEEE CAS_MB Lockup WHITE RGB_300ppi.png";
import image2 from "@/public/IEEE ComSoc_MB Lockup WHITE RGB_300ppi.png";
import image3 from "@/public/IEEE Control Systems Society Logo White RGB.png";
import image4 from "@/public/IEEE SPS_MB Lockup WHITE RGB_300ppi.png";
import image5 from "@/public/IEEE RAS MB Lockup WHITE RGB_300ppi.png";
import image6 from "@/public/IEEE NPSS Logo WHITE.png";
import image7 from "@/public/IEEE IAS_MB Lockup WHITE RGB_300ppi.png";
import image8 from "@/public/IEEE EDS_MB Lockup WHITE RGB 300ppi.png";
import image9 from "@/public/IEEE EducationSoc_MB Lockup WHITE RGB_300ppi.png";
import image10 from "@/public/IEEE-CS_LogoTM-white.png";
const Scroll = ()=>{
    return (
        <>
        <div className={styles.logos}>
        <div className={styles.slide}>
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>
            <img src={image4}></img>
            <img src={image5}></img>
            <img src={image6}></img>
            <img src={image7}></img>
            <img src={image8}></img>
            <img src={image9}></img>
            <img src={image10}></img>
        </div>
        <div className={styles.slide}>
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>
            <img src={image4}></img>
            <img src={image5}></img>
            <img src={image6}></img>
            <img src={image7}></img>
            <img src={image8}></img>
            <img src={image9}></img>
            <img src={image10}></img>
        </div>
       
    </div>
        </>
    )
}
export default Scroll;