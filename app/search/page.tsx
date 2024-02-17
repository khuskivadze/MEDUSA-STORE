'use client'

import styles from './page.module.css'
import { IoMdSearch } from "react-icons/io";

export default () => {
    
    return (
        <section className= {styles.search}>

          <div className= {styles.search_input}>
            <div className= {styles.search_icone}>
               <IoMdSearch  className= {styles.icone}/>
            </div>
            <input type="search" placeholder='Search product......' />
             

          </div>

          <div className= {styles.search_content}>
            <div className= {styles.box}>
              <div className={styles.box_img}>
                <img src="/blender-nobg-1700674984144.webp" alt="" className={styles.image} />
              </div>
              <div className={styles.box_title}>
                <p>BlendMaster Elite Fusionato</p>
              </div>
            </div>
            <div className= {styles.box}>
              <div className={styles.box_img}>
                <img src="/chair-nobg-1700675020905.webp" alt="" className={styles.image} />
              </div>
              <div className={styles.box_title}>
                <p>Corporate Commando Throne</p>
              </div>
            </div>
            <div className= {styles.box}>
              <div className={styles.box_img}>
                <img src="/radio-nobg-1700675050588.webp" alt="" className={styles.image} />
              </div>
              <div className={styles.box_title}>
                <p>Decibel Dominator Deluxe</p>
              </div>
            </div>

            <div className= {styles.box}>
              <div className={styles.box_img}>
                <img src="/hoodie-nobg-1700675072425.webp" alt="" className={styles.image} />
              </div>
              <div className={styles.box_title}>
                <p>Nebula Noir Hoodie</p>
              </div>
            </div>
            <div className= {styles.box}>
              <div className={styles.box_img}>
                <img src="/watch-nobg-1700675096621.webp" alt="" className={styles.image} />
              </div>
              <div className={styles.box_title}>
                <p>xorbita Elegance Elite</p>
              </div>
            </div>
            <div className= {styles.box}>
              <div className={styles.box_img}>
                <img src="/lamp-nobg-1700675116934.webp" alt="" className={styles.image} />
              </div>
              <div className={styles.box_title}>
                <p>Metallic Majesty Illuminator</p>
              </div>
            </div>



             


            
            




          </div>
        

        </section>
    )
}