import type { IChild } from "@/types";
import styles from "./Container.module.scss";

export function Container({ children }: IChild) {
  return <div className={styles.container}>{children}</div>;
}
