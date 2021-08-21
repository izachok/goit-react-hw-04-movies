import Loader from 'react-loader-spinner';
import React from 'react';
import s from './Loading.module.scss';

export default function Loading() {
  return (
    <Loader
      className={s.item}
      type="Audio"
      color="#ff6b01"
      height={100}
      width={100}
    />
  );
}
