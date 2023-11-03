import React from 'react';
import UseStorage from '../hooks/UseStorage';

function UploadProgess({file, upDater}) {
  if(file)
  {
    const {url, progess, error} = UseStorage(file, upDater);
  }
    // let perProgess = Math.ceil(progess);
    // let proProgess = perProgess + '%';

  return (
    <div>{'Add image'}</div>
  )
}

export default UploadProgess;