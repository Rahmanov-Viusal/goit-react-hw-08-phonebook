import s from './ContactList.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContact } from '../../redux/operations';
import { getLoading, getVisibleContacts } from '../../redux/selectors';
import Loader from '../Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);
  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className={s.filterList}>
          {visibleContacts.map(({ id, number, name }) => (
            <li className={s.filterListItem} key={id}>
              <p className={s.text}>
                {name}: <span className={s.span}>{number}</span>
              </p>

              <button
                className={s.btn}
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Contacts;
