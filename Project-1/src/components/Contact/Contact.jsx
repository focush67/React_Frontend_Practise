import React from 'react'
import './Contact.scss'
import Header from '../Header/Header';
const Contact = () => {
  return (
    <>
    
    <div className='contact' id='contact'>
      <main>
        <h1>Contact Us</h1>
        <form action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" required placeholder='Abc'/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" required placeholder='abc@xyz.com'/>
            </div>

            <div>
                <label htmlFor="">Message</label>
                <input type="text" required placeholder='Your query ...'/>
            </div>


            <button type='submit'>Send</button>
        </form>
      </main>
    </div>
    </>
  );
}

export default Contact;
