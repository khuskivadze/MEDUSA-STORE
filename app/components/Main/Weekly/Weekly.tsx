import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import styles from './Weekly.module.css'








export  default function Weekly ()  {
    return (
        <section className= {styles.last__drops}>
        <div className={styles.drosp_title}>
            <div className={styles.title__top}>
                <p>Weekly Picks</p>
                <Link href="" className={styles.link}>
                  <p>View all</p>
                  <MdArrowOutward />
               </Link>
            </div>

        </div>

        <div className={styles.content}>

            <div className={styles.box}>
                <div className={styles.img}>
                    <img src="/hoodie-nobg-1700675072425.webp" alt="" />
                </div>
                <div className={styles.title}>
                    <p>Nebula Noir Hoodie</p>
                    <span>$199.00</span>
                </div>

            </div>
            <div className={styles.box}>
                <div className={styles.img}>
                    <img src="/watch-nobg-1700675096621.webp" alt="" />
                </div>
                <div className={styles.title}>
                    <p>Exorbita Elegance Elite</p>
                    <span>$1,199,00</span>
                </div>

            </div>
            <div className={styles.box}>
                <div className={styles.img}>
                    <img src="/lamp-nobg-1700675116934.webp" alt="" />
                </div>
                <div className={styles.title}>
                    <p>Metallic Majesty Illuminator</p>
                    <span>$399.00</span>
                </div>

            </div>



        </div>






    </section>
    )
}