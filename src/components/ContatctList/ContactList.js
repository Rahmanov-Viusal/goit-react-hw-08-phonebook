import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../variables/motionVariable';
import s from './ContactList.module.scss';

// const Contacts = () => {
//   const dispatch = useDispatch();
//   const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
//   const loading = useSelector(contactsSelectors.getLoading);
//   // useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <ul className={s.filterList}>
//           {visibleContacts.map(({ id, number, name }) => (
//             <li className={s.filterListItem} key={id}>
//               <p className={s.text}>
//                 {name}: <span className={s.span}>{number}</span>
//               </p>

//               <Button
//                 onClick={() => dispatch(contactsOperations.deleteContact(id))}
//                 type="button"
//                 variant="contained"
//                 startIcon={<DeleteIcon />}
//               >
//                 Delete
//               </Button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default Contacts;

export default function Contacts() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      {contacts.length > 0 && !error ? (
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
