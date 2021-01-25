import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../input-forms";
import CustomButton from "../buttons/custom-button";
import { Link } from "react-router-dom";
import ImageUpload from "../image-upload";
import { addUserStart, clearErrors } from "../../redux/user/user.actions";
import useStyles from "../../css/add-user.styles";

const AddUser = ({ history, path, userToEdit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => dispatch(clearErrors()), [dispatch]);

  const admin = useSelector((state) => state.user.currentUser);
  const isRequestError = useSelector((state) => state.user.error);
  const isUserBeingAdded = useSelector((state) => state.user.isFetching);
  const [photo, setPhoto] = useState(null);
  const [userCredentials, setUserCredentials] = useState({
    lastname: "",
    firstname: "",
    tel: "",
    email: "",
    blocked: false,
    password: "",
  });
  useEffect(() => {
    if (userToEdit) {
      console.log("HELLO SANTA CLAUS");
      const { lastname, firstname, tel, email, blocked, id } = userToEdit;
      setUserCredentials({
        lastname,
        firstname,
        email,
        id,
        tel: `${tel || ""}`,
        blocked: blocked || false,
        password: "",
      });
    }
  }, [userToEdit]);

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "confirmPassword") {
      return setConfirmPassword(e.target.value);
    }
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== userCredentials.password) return;
    const callback = () => history.push(path);
    if (userToEdit) {
      return;
    }
    dispatch(
      addUserStart({ ...userCredentials, org_id: admin.organization }, callback)
    );
  };

  const [passwordLengthMsg, setPasswordLengthMsg] = useState({
    message: "",
    error: false,
  });

  const [passwordMatchMsg, setPasswordMatchMsg] = useState({
    message: "",
    error: false,
  });

  useEffect(() => {
    if (!userCredentials.password || userCredentials.password.length >= 6) {
      if (passwordLengthMsg.message) {
        setPasswordLengthMsg({ message: "", error: false });
      }
    } else if (userCredentials.password.length < 6) {
      if (!passwordLengthMsg.error) {
        setPasswordLengthMsg({
          message: "Длина пароля должна быть не менее 6 симоволов",
          error: true,
        });
      }
    }
  }, [
    userCredentials.password,
    passwordLengthMsg.error,
    passwordLengthMsg.message,
  ]);

  useEffect(() => {
    if (!confirmPassword) return;
    if (confirmPassword !== userCredentials.password) {
      setPasswordMatchMsg({
        message: "Пароль и подтверждение не совпадают",
        error: true,
      });
    } else {
      if (passwordMatchMsg.message) {
        setPasswordMatchMsg({
          message: "",
          error: false,
        });
      }
    }
  }, [confirmPassword, passwordMatchMsg.message, userCredentials.password]);

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.header}>
        <div className={classes.title}>{`${
          userToEdit ? "Редактировать" : "Добавить"
        } пользователя`}</div>
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
          required
        />
        <FormInput
          label="Имя"
          name="firstname"
          value={userCredentials.firstname}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <FormInput
          label="Электронная почта"
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleChange}
          autoComplete="off"
          required
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
          required
        />
        <FormInput
          label="Подтверждение пароля"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </div>
      <div className={classes.grid}>
        <div className={classes.note}>{passwordLengthMsg.message}</div>
        <div className={classes.note}>{passwordMatchMsg.message}</div>
      </div>
      <div className={classes.subtitle}>Добавить фото</div>
      <ImageUpload
        imageToUpload={photo}
        setImageToUpload={setPhoto}
        maxHeight={144}
        maxWidth={144}
      />
      <div className={classes.error}>{isRequestError}</div>
      <div className={classes.buttons}>
        <CustomButton disabled={isUserBeingAdded}>
          {isUserBeingAdded ? "сохраняется..." : "Сохранить"}
        </CustomButton>
        <Link to={`${path ? path : "#"}`}>Отмена</Link>
      </div>
      {userToEdit && (
        <Link to={`${path ? path : "#"}`} className={classes.delete}>
          Удалить пользователя
        </Link>
      )}
    </form>
  );
};

export default AddUser;
