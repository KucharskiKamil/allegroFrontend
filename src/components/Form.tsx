import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  imie: string;
  nazwisko: string;
  email: string;
  telefon: string;
  kraj: string;
  miasto: string;
  ulicaNrDomu: string;
}

const validateName = (value: string) => {
  if (!value) return 'Imię jest wymagane';
  if (value.length < 3) return 'Imię musi mieć przynajmniej 3 znaki';
  if (!/^[A-Z][a-zA-Z]*$/.test(value)) return 'Imię musi zaczynać się z dużej litery i składać się tylko z liter';
  return true;
};

const validateSurname = (value: string) => {
  if (!value) return 'Nazwisko jest wymagane';
  if (value.length < 3) return 'Nazwisko musi mieć przynajmniej 3 znaki';
  if (!/^[A-Z][a-zA-Z]*$/.test(value)) return 'Nazwisko musi zaczynać się z dużej litery i składać się tylko z liter';
  return true;
};

const validateEmail = (value: string) => {
  if (!value) return 'Email jest wymagany';
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return 'Email musi być prawidłowy';
  return true;
};

const validatePhone = (value: string) => {
  if (!value) return 'Telefon jest wymagany';
  if (!/^[1-9][0-9]{8}$/.test(value)) return 'Telefon musi mieć 9 cyfr i nie może zaczynać się od 0';
  return true;
};

const validateCountry = (value: string) => {
  if (!value) return 'Kraj jest wymagany';
  if (!/^[A-Z][a-zA-Z]*$/.test(value)) return 'Kraj nie może zawierać cyfr i musi zaczynać się z dużej litery';
  return true;
};

const validateCity = (value: string) => {
  if (!value) return 'Miasto jest wymagane';
  if (!/^[A-Z][a-zA-Z]*$/.test(value)) return 'Miasto nie może zawierać cyfr i musi zaczynać się z dużej litery';
  return true;
};

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='form-name'>
        <p>Twoje imie i nazwisko</p>
        <div className='form-name-inputs-holder'>
          <input {...register('imie', { validate: validateName })} type='text' placeholder='Imię' />
          {errors.imie && <p className='error-display'>{errors.imie.message}</p>}
          <input {...register('nazwisko', { validate: validateSurname })} type='text' placeholder='Nazwisko' />
          {errors.nazwisko && <p className='error-display'>{errors.nazwisko.message}</p>}
        </div>
      </div>
      <div className='email-phone-holder'>
        <div className='form-email'>
          <p>Twoj email</p>
          <input {...register('email', { validate: validateEmail })} type='text' placeholder='Email' />
          {errors.email && <p className='error-display'>{errors.email.message}</p>}
        </div>
        <div className='form-phone'>
          <p>Twoj telefon</p>
          <input {...register('telefon', { validate: validatePhone })} type='text' placeholder='Nr telefonu' />
          {errors.telefon && <p className='error-display'>{errors.telefon.message}</p>}
        </div>
      </div>
      <div className='form-adress'>
        <div>
          <p>Twoj kraj</p>
          <input {...register('kraj', { validate: validateCountry })} type='text' placeholder='Kraj' />
          {errors.kraj && <p className='error-display'>{errors.kraj.message}</p>}
        </div>
        <div>
          <p>Twoje miasto</p>
          <input {...register('miasto', { validate: validateCity })} type='text' placeholder='Miasto' />
          {errors.miasto && <p className='error-display'>{errors.miasto.message}</p>}
        </div>
        <div>
          <p>Twoja ulica i nr domu</p>
          <input {...register('ulicaNrDomu')} type='text' placeholder='Ulica i nr domu' />
        </div>
      </div>
      <button type='submit' className='przyciskSubmit'>Submit</button>
      {formSubmitted && <p className='success-message'>Wszystko jest OK, piwko wyślemy jutro!</p>}
    </form>
  );
};

export default Form;
