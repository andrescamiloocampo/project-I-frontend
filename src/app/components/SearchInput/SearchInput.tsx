import type { ReactElement } from "react";
import styles from "./SearchInput.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchInput = (): ReactElement => {
  return (
    <div className={styles.searchContainer}>
      <MagnifyingGlassIcon width={"1rem"} className={styles.searchIcon} color="black"/>
      <input
        type="text"
        placeholder="Buscar novedades"
        className={styles.search}
      />
    </div>
  );
};
