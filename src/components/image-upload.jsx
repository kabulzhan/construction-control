import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Compress from "compress.js";
import {
  baseStyle,
  acceptStyle,
  activeStyle,
  rejectStyle,
  plusStyle,
} from "../css/image-upload.styles";

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
        <span style={plusStyle}>+</span>
        <div>
          {props.imageToUpload
            ? "Картинка загружена"
            : "Кликните или перетащите сюда картинку"}
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
