import React from 'react'
import styles from './login.module.scss'


const TextSubtitle = ({style}) => {
   return (
      <div className={styles.aboutText} style={style}>
         <h2>You want to watch some of your favourite movies sitting in a big, comfortable and soft armchair, with great audio, but without noisy people behing? We are here to help You. <span>Log in</span> first, add a movie and then we'll get it for you. Bring your family or friends and watch.</h2>
      </div>   
   )
}

export default TextSubtitle
