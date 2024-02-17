import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import styles from './Sale.module.css'


export  default function Sale ()  {
    return (
        <section className= {styles.last__drops}>
            <div className={styles.drosp_title}>
                 <div className={styles.title__top}>
                    <p>Sale</p>
                        <Link href="" className={styles.link}>
                             <p>View all</p>
                              <MdArrowOutward />
                        </Link>
                </div>

            </div>
            <div className={styles.content}>

                <div className={styles.box}>
                <div className={styles.img}>
                    <img src="/blender-nobg-1700674984144.webp" alt="" />
                </div>
                <div className={styles.title}>
                    <p>BlendMaster Elite Fusionator</p>
                    <div className={styles.data}>
                         <span className={styles.outline}>$299.00</span>
                         <span className={styles.sale}>$199.00</span>
                    </div>

                </div>

                </div>
                <div className={styles.box}>
                <div className={styles.img}>
                    <img src="/chair-nobg-1700675020905.webp" alt="" />
                </div>
                <div className={styles.title}>
                    <p>Corporate Commando Throne</p>
                    <div className={styles.data}>
                         <span className={styles.outline}>$600.00</span>
                         <span className={styles.sale}>$550.00</span>
                    </div>
                </div>

                </div>
                <div className={styles.box}>
                <div className={styles.img}>
                    <img src="/radio-nobg-1700675050588.webp" alt="" />
                </div>
                <div className={styles.title}>
                    <p>Decibel Dominator Deluxe</p>
                    <div className={styles.data}>
                         <span className={styles.outline}>$249.00</span>
                         <span className={styles.sale}>$199.00</span>
                    </div>
                </div>

                </div>
             </div>
       </section>
    )
}