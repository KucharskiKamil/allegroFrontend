import React from 'react';

const ToDoList: React.FC = () => {

  return (
    <div className="opis-holder">
        <div>

        
      <h1>To jest opis aplikacji</h1>
      <p>Aplikacja składa się z prostej To-Do List do której możemy dodawać wiersze posiadające tytuł i opis.<br></br>Jest w niej użyta walidacja z wymaganiami:</p>

    <div className='wymagania'>
        <p><b>1. Przynajmniej 5 znaków w tytule</b></p>
        <p><b>2. Przynajmniej 10 znaków w opisie</b></p>
        <p><b>3. Brak słowa "kot", "pies" lub "kura" w opisie i tytule</b></p>

      </div>

      
        <p className='opisFormularza'>
            Na trzeciej stronie mamy także przykładowy formularz z walidacją. Jest to jedynie testowa wersja. <br></br>Z góry przepraszam za CSS, strona mogłaby wyglądać lepiej ale na dzień dzisiejszy brakuje mi czasu <br></br>abym mógł na spokojnie się za to wziąć.
        </p>
      </div>
    </div>
  );
};

export default ToDoList;