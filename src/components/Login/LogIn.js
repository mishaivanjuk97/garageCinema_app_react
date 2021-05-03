import React from 'react'
import { useState } from 'react'
import styles from './login.module.scss'
import Form from './Form'
import AboutText from './AboutText'
import WelcomeText from './WecomeText'
const LogIn = () => {
   const [buttonValue, setButtonValue] = useState('About')

   function changeButtonValue() {
      if(buttonValue === 'About') {
         setButtonValue('Log In')
      } else {
         setButtonValue('About')
      }
   }

   return (   
      <div className={styles.showcase}>   
         <Form className={buttonValue === "About" ? styles.left : styles.movedLeft}/>
         <WelcomeText buttonValue={buttonValue} changeButtonValue={changeButtonValue} className={buttonValue === "About" ? styles.welcomeText : styles.movedWelcomeText}/>
         <AboutText className={buttonValue === "About" ? styles.aboutText : styles.movedAboutText}/>
      </div>
   )
}

export default LogIn