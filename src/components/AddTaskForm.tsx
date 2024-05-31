import React, { useState } from 'react';

interface AddTaskFormProps {
  addTask: (subject: string, title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const forbiddenWords = ['pies', 'kot', 'kura'];

    if (subject.trim().length < 5) {
      setError('Temat musi mieć co najmniej 5 znaków.');
    } else if (title.trim().length < 10) {
      setError('Opis musi mieć co najmniej 10 znaków.');
    } else if (forbiddenWords.some(word => subject.toLowerCase().includes(word))) {
      setError('Temat nie może zawierać słów "pies", "kot" ani "kura".');
    } else if (forbiddenWords.some(word => title.toLowerCase().includes(word))) {
      setError('Opis nie może zawierać słów "pies", "kot" ani "kura".');
    } else {
      addTask(subject, title);
      setSubject('');
      setTitle('');
      setError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Temat"
          className='topic-input'
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Opis"
          className='description-input'
        />
        <button className='button-add' type="submit">Dodaj</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AddTaskForm;
