import React from 'react';

const Form: React.FC = () => {

  return (

        <div className='form'>
            <div className='form-name'>
                <p>Twoje imie i nazwisko</p>
                <div className='form-name-inputs-holder'>
                    <input type='text' placeholder='Imię'></input>
                    <input type='text' placeholder='Nazwisko'></input>
                </div>
                
            </div>
            <div className='email-phone-holder'>
            <div className='form-email'>
                <p>Twoj email</p>
                <input type='text' placeholder='Email'></input>
            </div>
            <div className='form-phone'>
                <p>Twoj telefon</p>
                <input type='text' placeholder='Nr telefonu'></input>
            </div>
            </div>
            
            <div className='form-adress'>
                <div>
                    <p>Twoj kraj</p>
                    <input type='text' placeholder='Kraj'></input>
                </div>
                <div>
                    <p>Twoje miasto</p>
                    <input type='text' placeholder='Miasto'></input>
                </div>
                <div>
                    <p>Twoja ulica i nr domu</p>
                    <input type='text' placeholder='Ulica i nr domu'></input>
                </div>
                
            </div>
        </div>
  );
};

export default Form;