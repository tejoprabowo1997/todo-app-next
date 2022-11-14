import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <a
        className={`${styles.container} dark:text-gray-300`}
        href="https://www.instagram.com/tejoprabowo97/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Tejo Prabowo
      </a>
    </footer>
  );
};

export default Footer;
