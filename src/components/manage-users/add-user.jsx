import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../buttons/custom-button";
import { Link, useHistory } from "react-router-dom";
import ImageUpload from "../image-upload";
import { addUser } from "../../redux/user/user.actions";
import useStyles from "../../css/add-user.styles";

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
    password: "",
    confirmPassword: "",
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
          width="290px"
          value={userCredentials.lastname}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Имя"
          name="firstname"
          value={userCredentials.firstname}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Электронная почта"
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Телефон"
          name="tel"
          value={userCredentials.tel}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Пароль"
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Подтверждение пароля"
          type="password"
          name="confirmPassword"
          value={userCredentials.confirmPassword}
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
        <CustomButton handleClick={handleSubmit}>Сохранить</CustomButton>
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
