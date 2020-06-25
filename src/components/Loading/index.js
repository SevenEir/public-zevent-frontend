import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading({ type, color }) {
  return <ReactLoading type={'spin'} color={'black'} height={80} width={80} />;
}
