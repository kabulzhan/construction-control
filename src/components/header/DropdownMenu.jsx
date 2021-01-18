import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMenuStyles } from "../../css/header.styles";

const DropdownMenu = ({ outsideClickDetector, login, handleClick }) => {
  const classes = useMenuStyles();
  // const user = useSelector((state) => state.user);
  const wrapperRef = React.useRef(null);
  outsideClickDetector(wrapperRef);

  const handleOnClick = () => {
    handleClick(false);
  };

  return (
    <>
      {login ? (
        <div className={classes.dropdownMenu} ref={wrapperRef}>
          <div className={classes.loginMenu}>
            <Link className={classes.menuItem} to="/login/reset_password">
              Сменить пароль
            </Link>
            <Link className={classes.menuItem}> Выход</Link>
          </div>
        </div>
      ) : (
        <div className={classes.dropdownMenu} ref={wrapperRef}>
          <Link
            onClick={handleOnClick}
            className={classes.menuItem}
            to="/main/users"
          >
            Пользователи (виден только у администратора)
          </Link>
          <Link
            onClick={handleOnClick}
            className={classes.menuItem}
            to="/main/sites"
          >
            Объекты
          </Link>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
