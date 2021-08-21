import React from 'react';
import s from './ErrorMessage.module.scss';

export default function ErrorMessage({ message }) {
  return <div className={s.message}>{message}</div>;
}
