 
import Lastdrops from './LastDrops/Lastdrops'
import styles from './Main.module.css'
import Sale from './Sale/Sale'
import Weekly from './Weekly/Weekly'



export  default function Main () {
    return (
        <main>

            <section className={styles.menu__cover}>
                <img src="/download.png" alt="" />
            </section>


            <section className={styles.main__contents}>
                <Lastdrops/>
                <Weekly/>
                <Sale/>


            </section>
       

          
        </main>
    )
}