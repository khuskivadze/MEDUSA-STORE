'use client'
import Link from "next/link"
import styles from "./Header.module.css" 
import Menuitems from "./MenuItems/Menuitems"
import Menuitem from "./MenuItems/Menuitem/Menuitem"
import BurgerMenu from "../BurgerMenu/Burgermenu"
import { useState } from "react"




export  default function Header () {

    const [showBurgerMenu, setShowBurgerMenu] =  useState(false)

    const onShowBurger = (e: any) => {
        setShowBurgerMenu(!showBurgerMenu)

    }


    return (
        <> 
        <header className= {styles.header}>
            <div className={styles.menu__Logo}>
                <Link href="" className={styles.items} onClick={onShowBurger}>
                    <Menuitem >Menu</Menuitem>
                </Link>
            </div>
            <div className={styles.header__logo}>
                <Link href="/"  >
                   <h1 className={styles.header__title}>MEDUSA STORE</h1>
                </Link>
            </div>
            <Menuitems/>
            
        </header>


           { showBurgerMenu && 
             <BurgerMenu/>
           }

        </>
    )
}