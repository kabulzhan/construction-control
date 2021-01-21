import React, { useState } from "react";
import { FormInput } from "../input-forms";
import CustomButton from "../buttons/custom-button";
import { useContactStyles } from "../../css/manage-sites.styles";

const Contacts = () => {
  const classes = useContactStyles();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    tel: "",
    other_contacts: "",
  });
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  console.log(contact);
  return (
    <>
      <h5>Контакты</h5>
      <div className={classes.contact}>
        <FormInput
          label="Имя"
          name="name"
          value={contact.name}
          handleChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Телефон"
          name="tel"
          value={contact.tel}
          handleChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Электронная почта"
          name="email"
          value={contact.email}
          type="email"
          handleChange={handleChange}
          autoComplete="off"
        />
        <FormInput
          label="Другие способы связи"
          name="other_contacts"
          value={contact.other_contacts}
          handleChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className={classes.add}>
        <CustomButton>добавить контакт</CustomButton>
      </div>
    </>
  );
};

export default Contacts;
