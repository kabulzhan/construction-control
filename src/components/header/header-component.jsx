import React from "react";
import { ReactComponent as Ham } from "../../assets/ham.svg";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import DropdownMenu from "./DropdownMenu";
import { useHeaderStyles } from "../../css/header.styles";

const Header = () => {
  const classes = useHeaderStyles();
  const [menu, setMenu] = React.useState(false);

  const handleClick = (e) => {
    if (e.currentTarget.id === menu) return setMenu(false);
    setMenu(e.currentTarget.id);
  };

  const leftMenuRef = React.useRef(null);
  const loginMenuRef = React.useRef(null);
  const OutsideClickDetector = (ref, menuToClose) => {
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref.current &&
          !leftMenuRef.current.contains(event.target) &&
          !loginMenuRef.current.contains(event.target) &&
          !ref.current.contains(event.target)
        ) {
          setMenu(!menu);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  return (
    <div className={classes.header}>
      <div
        ref={leftMenuRef}
        id="leftMenu"
        className={classes.leftMenu}
        onClick={handleClick}
      >
        <Ham onClick={handleClick} />
      </div>
      <div
        ref={loginMenuRef}
        id="loginMenu"
        className={classes.logout}
        onClick={handleClick}
      >
        <span className={classes.username}>Placeholder User</span>
        <Triangle className={classes.triangle} />
      </div>
      {menu && (
        <DropdownMenu
          outsideClickDetector={OutsideClickDetector}
          login={menu === "loginMenu"}
          handleClick={setMenu}
        />
      )}
    </div>
  );
};

export default Header;
