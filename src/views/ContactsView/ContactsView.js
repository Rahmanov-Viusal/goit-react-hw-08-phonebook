import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../components/ContatctList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/FilterContact';
import { contactsOperations } from '../../redux/contacts';
import styles from './Contacts.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title_header}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
