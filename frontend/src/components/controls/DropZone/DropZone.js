import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import cn from 'classnames'

function DropZone({ className, onChange, ...rest }) {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={cn('dropzone', className)} {...getRootProps()}>
      <input className='dropzone__input' {...getInputProps()} />
      <i className='fa fa-upload' />
      {
        isDragActive ?
          <p className='dropzone__text'>Отпустите файлы здесь, для их загрузки ...</p> :
          <p className='dropzone__text'>Перетащите сюда файлы или кликните для их выбора</p>
      }
    </div>
  )
}

export default DropZone;
