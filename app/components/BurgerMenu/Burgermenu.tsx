'use client'
import Link from 'next/link';
import styles from './Burgermenu.module.css'
import { IoMdClose } from "react-icons/io";
import Menuitem from '../Header/MenuItems/Menuitem/Menuitem';
import { LiaFlagUsaSolid } from "react-icons/lia";

import { IoMdArrowRoundForward } from "react-icons/io";
import { useState } from 'react';
 
export  default function BurgerMenu () {


    const [removeBurger, setRemoverBurger] = useState(true)


    const closeBurger = (e : any) => {
        setRemoverBurger(!removeBurger)
    }


    return (
           
      <>  
          { removeBurger && 
            <section className={styles.burger}>

                <div className={styles.close_icone} onClick={closeBurger}>
                    <IoMdClose className={styles.closes} />
                </div>
    
                <nav className= {styles.burger_navigation}>
                    <ul className={styles.burgr__lists}>
                        <li className={styles.links}>
                            <Link href="/" className={styles.items}>
                                 <Menuitem>Home</Menuitem>
                             </Link>
                         </li>
                         <li className={styles.links}>
                            <Link href="/" className={styles.items}>
                                 <Menuitem>Store</Menuitem>
                             </Link>
                         </li>
                         <li className={styles.links}>
                            <Link href="/" className={styles.items}>
                                 <Menuitem>Search</Menuitem>
                             </Link>
                         </li>
                         <li className={styles.links}>
                            <Link href="/" className={styles.items}>
                                 <Menuitem>Account</Menuitem>
                             </Link>
                         </li>
                         <li className={styles.links}>
                            <Link href="/" className={styles.items}>
                                 <Menuitem>Cart</Menuitem>
                             </Link>
                         </li>
                    </ul>
                </nav>
    
                <div className= {styles.language}>
    
                    <p>Shiping  <span><LiaFlagUsaSolid className= {styles.flag}/> </span>United State </p>
                    <IoMdArrowRoundForward  className= {styles.arrow}  />
    
    
                </div>
    
    
            </section>
          }
      
      
      
      
      
      </>
         
    )
}