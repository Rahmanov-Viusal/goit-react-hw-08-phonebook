import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoaderComponent from '../../components/Loader';
import styles from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const handleChange = event => {
    const { name, value } = event.target;

    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.error('Not all fields are filled in!');
    }
    dispatch(authOperations.logIn({ email, password }));
    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={styles.field}
      />

      <TextField
        label="Password"
        variant="outlined"
        color="primary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={styles.field}
      />

      {!isLoading && (
        <Button variant="contained" color="primary" size="large" type="submit">
          Log in
        </Button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
  );
}
