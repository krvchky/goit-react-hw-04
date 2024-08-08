
import React from 'react';
// import { s } from 'vite/dist/node/types.d-aGj9QkWt';
import s from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <div className={s.errorMessage}>{message}</div>;
}
