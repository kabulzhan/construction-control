import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMenuStyles } from "../../css/header.styles";
import { signOut } from "../../redux/user/user.actions";

const DropdownMenu = ({ outsideClickDetector, login, handleClick }) => {
  const classes = useMenuStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
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
            <Link
              className={classes.menuItem}
              to="/main/reset_password"
              onClick={handleOnClick}
            >
              Сменить пароль
            </Link>
            <Link
              className={classes.menuItem}
              to="#"
              onClick={() => dispatch(signOut())}
            >
              Выход
            </Link>
          </div>
        </div>
      ) : (
        <div className={classes.dropdownMenu} ref={wrapperRef}>
          {user.organization ? (
            <Link
              onClick={handleOnClick}
              className={classes.menuItem}
              to="/main/users"
            >
              Пользователи
            </Link>
          ) : null}
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
