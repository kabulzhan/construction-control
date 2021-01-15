import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Compress from "compress.js";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5px",
  borderWidth: 2,
  borderColor: "#c4c4c4",
  borderStyle: "solid",
  backgroundColor: "#c4c4c4",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function ImageUpload(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.splice(1);
      const compress = new Compress();
      compress
        .compress(acceptedFiles, {
          quality: 1,
          maxHeight: props.maxHeight,
          maxWidth: props.maxWidth,
        })
        .then((data) => {
          props.setImageToUpload(`${data[0].prefix} ${data[0].data}`);
        })
        .catch((error) => console.log(error));

      // setImageToUpload(
      //   Object.assign(acceptedFiles[0], {
      //     preview: URL.createObjectURL(acceptedFiles[0]),
      //   })
      // )
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <span style={{ color: "black", fontSize: "70px", fontWeight: 100 }}>
          +
        </span>
        <p
          style={{
            textAlign: "center",
            marginTop: "auto",
            color: `${
              props.imageToUpload ? "green" : props.error ? "red" : "black"
            } `,
          }}
        >
          {props.imageToUpload
            ? "Картинка загружена"
            : "Кликните или перетащите сюда картинку"}
        </p>
      </div>
    </>
  );
}

export default ImageUpload;
