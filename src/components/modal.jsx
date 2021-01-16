import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import useStyles from "../css/modal.styles";

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
