import styles from './style.module.css'

export default function NavBar() {
    return (
      <header className={styles.header}>
        <div className={styles.navbar}>
          <nav>
            <ul className={styles.navbarList}>
              <li>image</li>
              <li>Home</li>
              <li>Search</li>
            </ul>
          </nav>
          <div className={styles.login}>
              <p>Login</p>
          </div>
        </div>
      </header>
    );
  }