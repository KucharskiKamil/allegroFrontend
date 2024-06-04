import React from 'react';

const Form: React.FC = () => {

  return (

        <div className='form'>
            <div className='form-name'>
                <p>Twoje imie i nazwisko</p>
                <input type='text'></input>
                <input type='text'></input>
            </div>
            <div className='email-phone-holder'>
            <div className='form-email'>
                <p>Twoj email</p>
                <input type='text'></input>
            </div>
            <div className='form-phone'>
                <p>Twoj telefon</p>
                <input type='text'></input>
            </div>
            </div>
            
            <div className='form-adress'>
                <div>
                    <p>Twoj kraj</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Twoje miasto</p>
                    <input type='text'></input>
                </div>
                <div>
                    <p>Twoja ulica i numer domu</p>
                    <input type='text'></input>
                </div>
                
            </div>
        </div>
  );
};

export default Form;