import React from 'react'
import {useState} from 'react'
import styles from './login.module.scss'

const Form = ({className}) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = () => {
      const user = {name, email, password};

      if(localStorage.getItem('user') === null) {
         localStorage.setItem('user', JSON.stringify(user))
      }
   }
   return (
      <div className={className}>
         <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <label for="name">Name</label>
            <input type="text" required onChange={(e) => setName(e.target.value)}/>
            <label for="email">Email</label>
            <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
            <label for="password">Password</label>
            <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className={styles.btn}>Submit</button>
         </form>
      </div>
   )
}

export default Form
