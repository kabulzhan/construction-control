import React, { useState, useEffect } from "react";
import useStyles from "../../css/add-subsection.styles";
import { FormInput, SelectForm } from "../../components/input-forms";
import ImageUpload from "../image-upload";
import { ReactComponent as CheckMarker } from "../../assets/markers/checkMarker.svg";

const Subsection = () => {
  const classes = useStyles();
  const [plan, setPlan] = useState(null);
  const [Coords, setCoords] = useState(null);
  const [MarkerCoords, setMarkerCoords] = useState(null);
  // console.log("ПЛАН: ", plan);

  useEffect(() => {
    const planElement = document.getElementById("plan");

    const getOffsetData = (e) => {
      setCoords({ x: e.offsetX, y: e.offsetY });
    };

    if (planElement) {
      planElement.addEventListener("click", getOffsetData);
    }
    return () => {
      if (planElement) {
        planElement.removeEventListener("click", getOffsetData);
      }
    };
  }, [plan]);

  const getDimensions = (e) => {
    // console.log(e.offsetX);
    console.log("OFFSET X: ", Coords);
    const imgSize = document.getElementById("plan").getBoundingClientRect();
    let xCoordInPercent = (Coords.x / imgSize.width) * 100;
    let yCoordInPercent = (Coords.y / imgSize.height) * 100;
    console.log(xCoordInPercent);
    setMarkerCoords({ x: `${xCoordInPercent}%`, y: `${yCoordInPercent}%` });
  };
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h3 className={classes.title}>Добавить Подраздел</h3>
        <FormInput label="Название" />
        <SelectForm
          label="Статус"
          options={{
            incomplete: "В работе",
            complete: "Завершен",
            unstarted: "Не начат",
          }}
        />
        {plan && (
          <div className={classes.planContainer}>
            {MarkerCoords && (
              <CheckMarker
                style={{
                  position: "absolute",
                  top: `calc(${MarkerCoords.y} - 40px)`,
                  left: `calc(${MarkerCoords.x} - 12.5px)`,
                }}
              />
            )}
            <img
              id="plan"
              className={classes.planImage}
              src={plan.preview}
              alt="plan"
              onClick={getDimensions}
            />
          </div>
        )}
        <h5>Добавить план</h5>
        <ImageUpload imageToUpload={plan} setImageToUpload={setPlan} />
      </div>
    </div>
  );
};

export default Subsection;
