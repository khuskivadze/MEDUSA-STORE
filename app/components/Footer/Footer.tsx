import Link from 'next/link'
import styles from './Footer.module.css'


export  default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className= {styles.title}>
                <Link href="/"  >
                   <h1 className={styles.header__title}>MEDUSA STORE</h1>
                </Link>

                <span >© 2024 Medusa Store. All rights reserved.</span>


            </div>
            <div className= {styles.links}>

                <div className= {styles.link}>
                    <ul>
                        <h3>Categories</h3>
                        <li>Clothing</li>
                        <li>Hoodies</li>
                        <li>Accessories</li>
                        <li>Audio</li>
                        <li>Furniture</li>
                    </ul>
                </div>
                <div className={styles.link}>
                    <ul>
                        <h3> Collections</h3>
                        <li>Latest Drops</li>
                        <li>Weekly Picks</li>
                        <li>Sale</li>
                        
                    </ul>
                </div>
                <div className={styles.link}>
                    <ul>
                        <h3>  Medusa</h3>
                        <li>GitHub</li>
                        <li>Documentation</li>
                        <li>Source code</li>
                        
                    </ul>
                </div>
            </div>


        </footer>
    )
}