import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../variables/motionVariable';
import s from './ContactList.module.scss';
import Loader from '../Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);
  const loading = useSelector(contactsSelectors.getLoading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : contacts.length > 0 && !error ? (
        <motion.ul className={s.list}>
          <AnimatePresence>
            {visibleContacts.map(({ id, name, number }) => (
              <motion.li
                className={s.item}
                key={id}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={variants}
              >
                <p className={s.info}>
                  <em>{name}</em>

                  <em>
                    <a className={s.link} href={`tel:${number}`}>
                      {number}
                    </a>
                  </em>
                </p>
                <IconButton
                  aria-label="delete"
                  variant="contained"
                  color="primary"
                  type="button"
                  title="Delete"
                  onClick={() => dispatch(contactsOperations.deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <p className={s.message}>
          Currently your phonebook has no contacts. Please add them.
        </p>
      )}
    </>
  );
}
