import React from 'react'
import { useState, Fragment } from 'react'
import styles from './login.module.scss'
import Form from './Form'
import TextSubtitle from './TextSubtitle'
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

   const screenHeight = window.innerHeight;
   const screenWidth = window.innerWidth; 

   const mobile = <Fragment>
      <div className={styles.showcase}>
      <Form style={buttonValue === "About" ? {transform: "translateY(0)"} : {transform: "translateY(-250%)"}}/>
         <WelcomeText buttonValue={buttonValue} changeButtonValue={changeButtonValue} style={buttonValue === "About" ? {transform: "translateY(70%)"} : {transform: "translateY(-100%)"}}/>
         <TextSubtitle style={buttonValue === "About" ? {transform: "translateY(400%)"} : {transform: "translateY(0)"}}/>
         </div>
   </Fragment>


   return (   
      <div>   
      {screenWidth > screenHeight ? <div className={styles.showcase}>
         <Form style={buttonValue === "About" ? {transform: "translateX(0)"} : {transform: "translateX(-250%)"}}/>
         <WelcomeText buttonValue={buttonValue} changeButtonValue={changeButtonValue} style={buttonValue === "About" ? {transform: "translateX(100%)"} : {transform: "translateX(-120%)"}}/>
         <TextSubtitle style={buttonValue === "About" ? {transform: "translateX(250%)"} : {transform: "translateX(0)"}}/>
      </div> : mobile}
      </div>
   )
}

export default LogIn