import { React, useState } from 'react'
import styles from './navbar.module.scss'
import { Link, useHistory } from 'react-router-dom'

const Navbar = () => {
   const [modal, setModal] = useState(false)
   const [mobileNav, setMobileNav] = useState(false)
   const history = useHistory();
   const logOut = () => {
      history.push('/')

      localStorage.removeItem('user');
      window.location.reload();
      setModal(false);

   }

   const showMobileNav = <div className={mobileNav ? styles.mobileNav : styles.hideMobileNav}>
                        <Link to="/" onClick={() => setMobileNav(false)}>Movies</Link>
                        <Link to="/add" onClick={() => setMobileNav(false)}>Add</Link>
                        <button onClick={() => setModal(true)} className={styles.logOutBtn}>Log out</button>
                        </div>

   const showModal = 
      <div className={modal ? styles.modal : styles.hideModal}>
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
