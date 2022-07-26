import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { MdDelete, MdVerified } from 'react-icons/md';
import ARConstants from '../../Utils/ARConstants';
import Constants from '../../Utils/Constants';
import FRConstants from '../../Utils/FRConstants';
import uploadFiles from '../JS/UploadHelper'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

var constants;

export default function UploadPreview(props) {
  const router = useRouter();
  {router.locale === "en" ? constants = Constants : router.locale === "fr" ? constants = FRConstants : router.locale === "ar" ? constants = ARConstants : constants = Constants}
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': [],
      'video/mp4': [],
      'video/x-m4v': [],
      'video/*': []
    },
    onDrop: acceptedFiles => {
      const allFiles = acceptedFiles.concat(files);
      setFiles(allFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        {file.type.match('image.*') && <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />}
         {file.type.match('video.*') && <video
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />}
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className={`${router.locale == "fr" ? 'bg-black text-white min-w-screen text-center text-middle text-sm tablet:text-xl laptop:text-4xl' : "bg-black text-white min-w-screen text-center text-middle text-lg tablet:text-2xl laptop:text-5xl"}`}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>{constants.fileUpload}</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      { files.length > 0 && <div className='min-w-screen flex flex-row min-w-screen grid grid-cols-12'>
      <button className='p-3 text-white bg-red-600 col-span-6 grid grid-cols-12' onClick={() => setFiles([])}><MdDelete className='text-red-500 bg-white rounded-full col-span-2 mt-3' /><div className='col-span-10'>{constants.deleteFiles}</div></button>
      <button className='p-3 text-white bg-green-600 col-span-6 grid grid-cols-12' onClick={() => { /*uploadFiles(files, props.storageFolder);*/ props.showForm(true)}}><MdVerified className='text-red-500 bg-white rounded-full col-span-2 mt-3' /><div className='col-span-10'>{constants.uploadFiles}</div></button>
     </div> }
    </section>
  );
}
