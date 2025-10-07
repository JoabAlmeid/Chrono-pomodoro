import styles from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode; //tudo o que o React aceita como tipo válido e children tá no node
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
