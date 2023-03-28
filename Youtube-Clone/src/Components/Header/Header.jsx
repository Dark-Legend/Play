import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Input from "../Input/Input";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    // <Container className={styles.headerContainer}>
    <div className={styles.headerContainer}>
      <div className={styles.searchContainer}>
        <Input type={"text"} className={styles.searchbar} />
        <Button style={{ width: "100%" }} className={styles.searchBtn}>
          <SearchIcon />
        </Button>
      </div>
    </div>
    // </Container>
  );
};

export default Header;
