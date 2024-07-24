import React, { useState } from 'react';

const FileInput = () => {
  const [fileInfo, setFileInfo] = useState(null);

  const handleFileChange = (event:any) => {
    const file = event.target.files[0]; // Get the first file selected

    if (file) {
      // Log file properties
      console.log(`Filename: ${file.name}`);
      console.log(`File Type: ${file.type}`);
      console.log(`File Size: ${file.size} bytes`);
      console.log(`Last Modified: ${file.lastModifiedDate}`);

      // Read the file content as binary
      const reader = new FileReader();
      reader.onload = (e:any) => {
        const binaryString = e.target.result;
        console.log(`Binary ByteBuffer: ${binaryString}`);
        setFileInfo({
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModifiedDate,
          
          binaryString,
        });
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileInfo && (
        <div>
          <p>Filename: {fileInfo.name}</p>
          <p>File Type: {fileInfo.type}</p>
          <p>File Size: {fileInfo.size} bytes</p>
          <p>Last Modified: {fileInfo.lastModified.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default FileInput;