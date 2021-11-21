import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import telIcon from '../../images/unnamed.png';
import s from './HomeView.module.css';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>

      <p className={s.text}>
        This app will help you manage your contacts in a proper way.
      </p>

      {!isLoggedIn && (
        <p className={s.info}>
          Please <b>Sign up</b> and then <b>Log in</b> so that to have access to
          your contacts.
        </p>
      )}
      <img src={telIcon} alt="telIcon" width="500" />
    </div>
  );
}
