import styles from "./Author.style.module.scss";

function Author() {
  return (
    <div className={styles.author}>
      {" "}
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/lauriselvijs/">Lauris</a>.
    </div>
  );
}

export default Author;
