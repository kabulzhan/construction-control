import { createUseStyles } from "react-jss";

export const useLoginPageStyles = createUseStyles({
  form: {
    width: "321px",
    margin: "auto",
  },
  inputs: {
    display: "grid",
    gap: "31px 0",
    marginBottom: "10px",
  },
  link: {
    float: "right",
    marginBottom: "30px",
  },
  loginLink: {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    marginTop: "18px",
  },
  recoverButtons: {
    marginTop: "45px",
  },
  instructions: {
    marginBottom: "33px",
    textAlign: "center",
  },
  note: {
    height: "40px",
    paddingTop: "5px",
    paddingLeft: "5px",
    color: "#1AA839",
  },
  error: {
    color: "#FF6262",
    paddingLeft: "5px",
  },
  oldPassword: {
    marginBottom: "45px",
  },
});
