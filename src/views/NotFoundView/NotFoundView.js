import imageNotFound from '../../images/error-404.jpeg';
import s from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div className={s.container}>
      <img src={imageNotFound} width="650" alt="ErrorImage" />
    </div>
  );
}
