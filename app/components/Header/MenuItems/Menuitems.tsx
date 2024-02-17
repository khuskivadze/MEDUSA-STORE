import Link from 'next/link'
import styles from './Menuitem.module.css'
import Menuitem from './Menuitem/Menuitem'


export  default function Menuitems () {
    return (


        <ul className={styles.menu_lists}>
            <li className={styles.item}>
                <Link href="/search" className= {styles.items} >
                    <Menuitem>Search</Menuitem>
               </Link>
            </li>
            <li className={styles.item}>
                <Link href="/" className= {styles.items}>
                    <Menuitem>Account</Menuitem>
               </Link>
            </li>

            <li className={styles.item}>
                <Link href="/" className= {styles.items}>
                    <Menuitem>Cart (0)</Menuitem>
               </Link>
            </li>




        </ul>

    )
}