import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.promo}>
        Created by <a href="https://t.me/azikulov">Azikulov</a>
      </p>

      <div className={styles.links}>
        <a href="#">Обратная связь</a>
        <a href="#">Конфиденциальность</a>
        <a href="#">© 2023  Яндекс</a>
      </div>
    </footer>
  );
}
