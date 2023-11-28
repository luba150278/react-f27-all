import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className={styles.wrap}>
          <div>Logo</div>
          <div className="d-flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </header>
  );
}