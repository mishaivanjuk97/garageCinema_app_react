import { React, useState } from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [modal, setModal] = useState(false)
   const [mobileNav, setMobileNav] = useState(false)
   
   const logOut = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('movies');
      window.location.reload();
      setModal(false);
   }

   const showMobileNav = <div className={styles.mobileNavActive} style={mobileNav ? {transform: 'translateX(0%)'} : {transform: 'translateX(-200%)'}}>
                        <Link to="/">Movies</Link>
                        <Link to="/add">Add</Link>
                        <button onClick={() => setModal(true)} className={styles.logOutBtn}>Log out</button>
                        </div>

   const showModal = 
      <div className={styles.modal} style={modal ? {transform: 'translateY(0)'} : {transform: 'translateY(-100%)'}}>
         <div className={styles.card}>
            <h3>Are you sure?</h3>
            <div className={styles.answer}>
               <button onClick={logOut} className={`${styles.btn} ${styles.btnY}`}>Yes</button>
               <button onClick={() => setModal(false)} className={`${styles.btn} ${styles.btnN}`}>No</button>
            </div>
         </div>
      </div>;

   return (
      <div className={styles.nav}>
         <h2>Garage<span>Cinema</span></h2>
         <div className={styles.links}>
            <Link to="/">Movies</Link>
            <Link to="/add">Add</Link>
            <button onClick={() => setModal(true)} className={styles.logOutBtn}>Log out</button>
         </div>
         {showMobileNav}
         <button class={styles.icon} onClick={() => setMobileNav(!mobileNav)}>
            <div class={mobileNav ? styles.line1Active : styles.line1}></div>
            <div class={mobileNav ? styles.line2Active : styles.line2}></div>
            <div class={mobileNav ? styles.line3Active : styles.line3}></div>
         </button>
         {showModal}
      </div>
   )
}

export default Navbar
