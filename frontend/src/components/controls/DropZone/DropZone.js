import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

function DropZone(props) {
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return <div></div>;
}

export default DropZone;
