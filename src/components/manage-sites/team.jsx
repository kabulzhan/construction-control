import React from "react";
import CustomButton from "../buttons/custom-button";
import { useTeamStyles } from "../../css/manage-sites.styles";

const Team = ({ edit }) => {
  const classes = useTeamStyles();
  return (
    <>
      <h5 className={classes.title}>Команда, работающая на объекте</h5>
      <div></div>
      {edit && (
        <div className={classes.add}>
          <CustomButton>добавить контакт</CustomButton>
        </div>
      )}
    </>
  );
};

export default Team;
