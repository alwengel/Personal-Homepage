import React from 'react';

import Button from '../components/Button'

import downloadIcon from "../assets/download-btn-icon.svg"

import { downloadFile } from '../utils/download';

interface DownloadButtonProps {
  file: string;
  filename: string;
  ButtonText: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ file, filename, ButtonText }) => {
  const handleDownload = () => {
    downloadFile({ fileUrl: file, fileName: filename });
  };


  return (
    <Button icon={downloadIcon} onClick={handleDownload}>
      Download {ButtonText}
    </Button>
  );
};

export default DownloadButton;
