import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://wa.me/">Обратная связь</a>
        <a href="#">Конфиденциальность</a>
        <a href="#">© 2023  Яндекс</a>
      </div>
    </footer>
  );
}
