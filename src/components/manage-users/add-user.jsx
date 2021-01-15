import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../buttons/custom-button";
import { Link, useHistory } from "react-router-dom";
import ImageUpload from "../image-upload";
import { addUser } from "../../redux/user/user.actions";

const useStyles = createUseStyles({
  container: {
    padding: "0 40px 27px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 10px 34px ",
  },
  title: {
    fontSize: "20px",
  },
  subtitle: {
    fontSize: "12px",
    padding: "23px 5px 11px",
  },
  block: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  label: {
    fontSize: "12px",
    paddingLeft: "5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "21px",
  },
  buttons: {
    padding: "50px 100px 25px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "12px",
  },
  delete: {
    fontSize: "12px",
    color: "#FF6262 !important",
  },
});

const AddUser = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [photo, setPhoto] = useState(null);
  const [userCredentials, setUserCredentials] = useState({
    lastname: "",
    firstname: "",
    tel: "",
    email: "",
    blocked: false,
  });
  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("submit handled");
    dispatch(addUser({ ...userCredentials, img: photo }));
    history.push("/main");
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.title}>Добавить пользователя</div>
        <div className={classes.block}>
          <input
            name="blocked"
            type="checkbox"
            checked={userCredentials.blocked}
            onChange={() =>
              setUserCredentials({
                ...userCredentials,
                blocked: !userCredentials.blocked,
              })
            }
          />
          <label className={classes.label}>Заблокирован</label>
        </div>
      </div>
      <div className={classes.grid}>
        <FormInput
          label="Фамилия"
          name="lastname"
          className={classes.input}
          width="290px"
          value={userCredentials.lastname}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Имя"
          name="firstname"
          className={classes.input}
          width="290px"
          value={userCredentials.firstname}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Электронная почта"
          className={classes.input}
          width="290px"
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Телефон"
          name="tel"
          className={classes.input}
          width="290px"
          value={userCredentials.tel}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className={classes.subtitle}>Добавить фото</div>
      <ImageUpload
        imageToUpload={photo}
        setImageToUpload={setPhoto}
        maxHeight={144}
        maxWidth={144}
      />

      <div className={classes.buttons}>
        <CustomButton bgColor="#1AA839" br="55px" onClick={handleSubmit}>
          Сохранить
        </CustomButton>
        <Link to={`${props.path ? props.path : "#"}`}>Отмена</Link>
      </div>
      <div>
        <Link
          to={`${props.path ? props.path : "#"}`}
          className={classes.delete}
        >
          Удалить
        </Link>
      </div>
    </div>
  );
};

export default AddUser;
