import Link from 'next/link'
import styles from './Lastdrops.module.css'
import { MdArrowOutward } from "react-icons/md";

export  default function Lastdrops ()  {
    return (
        <section className= {styles.last__drops}>
            <div className={styles.drosp_title}>
                <div className={styles.title__top}>
                    <p>Latest Drops </p>
                    <Link href="" className={styles.link}>
                      <p>View all</p>
                      <MdArrowOutward />
                   </Link>
                </div>

            </div>

            <div className={styles.content}>

                <div className={styles.box}>
                    <div className={styles.img}>
                        <img src="/headphones-nobg-1700675136219.webp" alt="" />
                    </div>
                    <div className={styles.title}>
                        <p>Audio Arrogance AuralElite</p>
                        <span>$249.00</span>
                    </div>

                </div>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <img src="/bag-nobg-1700675158493.webp" alt="" />
                    </div>
                    <div className={styles.title}>
                        <p>Pinnacle Posh Pack</p>
                        <span>$405.00</span>
                    </div>

                </div>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <img src="/turntable-nobg-1700675179097.webp" alt="" />
                    </div>
                    <div className={styles.title}>
                        <p>Vinyl Virtuoso Opulenza</p>
                        <span>$699</span>
                    </div>

                </div>



            </div>






        </section>
    )
} 