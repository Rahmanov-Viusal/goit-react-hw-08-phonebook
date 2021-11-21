import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import s from './ContactForm.module.scss';

function ContactForm() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const value = e.currentTarget.name;
    switch (value) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        throw new Error();
    }
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if (items.find(item => name === item.name)) {
      toast.warn(`${name} already exists in the contact book`);
      reset();
      return;
    }
    const contact = {
      name,
      number,
    };
    dispatch(contactsOperations.addContact(contact));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="+38 (099) 999-99-99"
        />
      </label>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        title="Add contact"
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;
