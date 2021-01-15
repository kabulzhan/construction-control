import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modal: {
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: "#302D42",
    left: 0,
    top: 0,
    zIndex: 6,
    display: "flex",
  },
  modalBody: {
    backgroundColor: "white",
    margin: "auto",
    padding: "0 10px",
  },
  close: {
    width: "100%",
    textAlign: "right",
    fontSize: "16px",
    lineHeight: "35px",
    height: "35px",
  },
  closeBtn: {
    paddingRight: "10px",
    paddingTop: "10px",
    marginTop: "10px",
    cursor: "pointer",
  },
});

const Modal = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    history.push(props.path);
  };
  const ChildComponent = props.child;
  return ReactDOM.createPortal(
    <div className={classes.modal} onClick={handleClose}>
      <div className={classes.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={classes.close}>
          <span className={classes.closeBtn} onClick={handleClose}>
            X
          </span>
        </div>
        <ChildComponent history={history} path={props.path} />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
