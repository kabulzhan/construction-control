import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../css/add-subsection.styles";
import { FormInput, SelectForm, TextArea } from "../../components/input-forms";
import CustomButton from "../buttons/custom-button";
import ImageUpload from "../image-upload";

const Subsection = (props) => {
  const classes = useStyles();
  const [plan, setPlan] = useState(null);
  const [subsection, setSubsection] = useState({
    name: "",
    status: "incomplete",
    description: "",
  });

  const handleChange = (e) => {
    setSubsection({ ...subsection, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h2 className={classes.title}>Добавить Подраздел</h2>
        <FormInput
          label="Название"
          name="name"
          value={subsection.name}
          onChange={handleChange}
        />
        <SelectForm
          label="Статус"
          name="status"
          onChange={handleChange}
          value={subsection.status}
          options={{
            incomplete: "В работе",
            complete: "Завершен",
            unstarted: "Не начат",
          }}
        />
        {plan && (
          <img
            id="plan"
            className={classes.planImage}
            src={plan.preview}
            alt="plan"
          />
        )}
        <h5>Добавить план</h5>
        <ImageUpload imageToUpload={plan} setImageToUpload={setPlan} />
        <div className={classes.description}>
          <TextArea
            label="Дополнительное описание"
            name="description"
            value={subsection.description}
            onChange={handleChange}
            height="15vh"
          />
        </div>
        <div className={classes.buttons}>
          <CustomButton submit>Добавить</CustomButton>
          <Link to={props.path}>Отмена</Link>
        </div>
      </div>
    </div>
  );
};

export default Subsection;
