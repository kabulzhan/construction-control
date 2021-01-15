import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdownMenu: {
    position: "absolute",
    top: "66px",
    width: "768px",
    zIndex: 5,
    backgroundColor: "#F8F8F8",
    display: "flex",
    flexDirection: "column",
  },
  loginMenu: {
    textAlign: "right",
    paddingRight: "10px",
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    paddingLeft: "10px",
    height: "52px",
    lineHeight: "52px",
    textDecoration: "none",
    color: "black !important",
  },
});

const DropdownMenu = ({ outsideClickDetector, login }) => {
  const classes = useStyles();
  // const user = useSelector((state) => state.user);
  const wrapperRef = React.useRef(null);
  outsideClickDetector(wrapperRef);
  return (
    <>
      {login ? (
        <div className={classes.dropdownMenu} ref={wrapperRef}>
          <div className={classes.loginMenu}>
            <Link className={classes.menuItem} to="login/reset_password">
              Сменить пароль
            </Link>
            <Link className={classes.menuItem}> Выход</Link>
          </div>
        </div>
      ) : (
        <div className={classes.dropdownMenu} ref={wrapperRef}>
          <Link
            onClick={() => console.log("hello world")}
            className={classes.menuItem}
          >
            Пользователи (виден только у администратора)
          </Link>
          <Link className={classes.menuItem}>Объекты</Link>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
