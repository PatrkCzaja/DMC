import React, { Component, useRef } from 'react';
import emailjs from '@emailjs/browser';
import picture from '../image2.jpg';

export const  Pricing  = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_max4rui', 'template_xzpro1c', form.current, 'xsvc_kGE-xSC8YiIP')
      .then((result) => {
          console.log(result.text);
          console.log("Wiadomość wysłana");
      }, (error) => {
          console.log(error.text);
      });
  };


 

  return (

    <div className='form'>

        <div className='sidebar'>
            <img src={picture} />
        </div>

        <div className='pricing'>
            <h2>
                Wycena Transportu
            </h2>
            <section>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, 
                making it over 2000 years old. Richard McClintock, a Latin professor
                at Hampden-Sydney College in Virginia, looked up one of the more obscure
                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                 the cites of the word in classical literature, discovered the 
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                by Cicero, written in 45 BC. This book is a treatise on the theory 
                of ethics, very popular during the Renaissance. The first line of L
                orem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
                section 1.10.32. The standard chunk of Lorem Ipsum used since the 1
                500s is reproduced below for those interested. Sections 1.10.32 and 
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                 reproduced in their exact original form, accompanied by English
                  versions from the 1914 translation by H. Rackham. 
                </p>
            </section>
        </div>

         <h1>Formularz wyceny</h1>
       

    <form ref={form} onSubmit={sendEmail}>
    
        <div className='subject'>
        <label>Rodzaj wyceny*</label>
            <select className='option' name="subject" id='subject' required>
                <option value='Transport krajowy'> Transport krajowy </option>
                <option value='Transport międzynarodowy'> Transport międzynarodowy </option>
                <option value='Drobnica'> Drobnica </option>
            </select>
        </div>
        <div className='personal'>

         <p>1. Dane kontaktowe</p>
      <label>Imię*</label>
      <input type="text" name="user_Fname" required />
      <label>Nazwisko*</label>
      <input type="text" name="user_Lname" required />
      <label>Numer Telefonu*</label>
      <input type="text"
      minLength={9}
      maxLength={9}
      size={9}   
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        name="user_phone"
        required/>

      <label>Email*</label>
      <input type="email" name="user_email" required />
      <label>Dodatkowe informacja</label>
      <textarea name="add-text" />
            </div>

            


              <div className='package'>  
        <p>2. Dane towaru</p>
      <label>Miejsce Załadunku*</label>
      <input type="text" name="start-place" required/>
      <label>Miejsce Rozładunku*</label>
      <input type="text" name="end-place" required/>
      <label>Planowana Data Załadunku*</label>
      <input type="date" name="start-date"required />
      <label>Planowana Data Dostawy*</label>
      <input type="date" name="end-date" required/>
      <label>Wymiary i waga towaru*</label>
      <input type="text" name="size" required/>
       <input className='submit' type="submit" value="Wyślij" />
            </div>
     
    </form>

    <div className='footer'>
        <footer>
        Wszelkie prawa zastrzeżone © DMC 2022
        </footer>
    </div>
            
    </div>
    );
  }


export default Pricing;

