import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Add name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Add number"
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;

// const ContactForm = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = event => {
//     setNumber(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(addContact({ id: nanoid(), name, number }));
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name
//         <input type="text" name="name" placeholder="Add name" value={name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Number
//         <input type="tel" name="number" placeholder="Add number" value={number} onChange={handleNumberChange} />
//       </label>
//       <button type="submit">Add Contact</button>
//     </form>
//   );
// };

// export default ContactForm;
