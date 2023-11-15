import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quiz</div>

      <button className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M5.02002 0V2H14.02V14H5.02002V16H16.02V0H5.02002ZM0.0200195 6H6.02002V3L12.02 8L6.02002 13V10H0.0200195V6Z"
            fill="black"
          />
        </svg>
        <span>Войти</span>
      </button>
    </header>
  );
}
