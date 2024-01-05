export function downloadFile(file: { fileUrl: string, fileName: string }): void {
    const { fileUrl, fileName } = file;
  
    console.log(`file: ${fileUrl}${fileName}`);
  
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  