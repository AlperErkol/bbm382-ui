import React, {useState} from 'react'

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;



const UploadFile = ({acceptVideos, uploadedLinks, apply}) => {
  

  const uplaodFileProps = {
    multiple: true,
    action: "http://localhost:8080/api/v1/frames/frame",
    onChange(info) {
      const { status } = info.file;
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      if (status === 'done') {
        uploadedLinks(info.file.response);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  

  return (
    <Dragger
        accept={apply ? '.pdf' : '.png, .jpeg, .jpg'}
        {...uplaodFileProps}>
        <p className="ant-upload-drag-icon">
        <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
        Support for a single or bulk upload. You can only upload photo and/or video.
        </p>
    </Dragger>
  )
}

export default UploadFile