"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./img-picker.module.css";
export default function ImagePicker({ label, name }) {
  const [pickedImg, setPickedImg] = useState();
  const imgInput = useRef();
  function handleInputClick() {
    imgInput.current.click();
  }
  function handlePickedImg(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImg(null);
      return;
    }
    const fileReder = new FileReader();
    fileReder.onload = () => {
      setPickedImg(fileReder.result);
    };
    fileReder.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImg && <p>No img Uploded</p>}
          {pickedImg && <Image src={pickedImg} fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/jpeg , image/png "
          ref={imgInput}
          onChange={handlePickedImg}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleInputClick}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}
