import React from 'react'
import styles from './login.module.scss'

const WelcomeText = ({buttonValue, changeButtonValue, className}) => {
      return (
      <div className={className}>
         <div className={styles.title}>
            <h1>Welcome</h1>
            <h1>to Garage<span>Cinema</span></h1>
         </div>
         <button className={styles.btn} onClick={changeButtonValue}>{buttonValue}</button>
      </div>
   )
}

export default WelcomeText
