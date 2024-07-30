"use client";
import React from "react";

const FileUp = () => {

  const handleSubmit = async (event) => {
    

    const productId = document.getElementById('productId').value;
    const productTypeId = document.getElementById('productTypeId').value; 
    const internalName = document.getElementById('internalName').value;
    const uploadFile = document.getElementById('upload_file').files[0];
    const longDescription = document.getElementById('longDescription').value;
    const primaryProductCategoryId = document.getElementById('primaryProductCategoryId').value;

    console.log(uploadFile);


    try {

      const base64String = await fileToBase64(uploadFile);

      const body = JSON.stringify({
        productId,
        productTypeId,
        internalName,
        upload_file_file: base64String,
        _upload_file_fileName: uploadFile.name,
        _upload_file_contentType: uploadFile.type,
        longDescription,
        primaryProductCategoryId
      })
      console.log(body)

      const response = await fetch('http://backend-server:8089/rest/services/createAtparProductByEvents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyTG9naW5JZCI6ImFkbWluIiwiaXNzIjoiQXBhY2hlT0ZCaXoiLCJleHAiOjE3MjE5MDYzNDksImlhdCI6MTcyMTkwNDU0OX0.7OIFrUfeDO_Qzq6LYunzr_cowv60VmhTpqo-XZcf2rLQ7m3jO-6mNSodEa5NU9oQmfmgA-jla7ybg4Iij8CHjg'            
        },
        body: body
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const base64String = event.target.result.split(',')[1]; // Remove the data URL part
            resolve(base64String);
        };
        
        reader.onerror = function(error) {
            reject(error);
        };
        
        reader.readAsDataURL(file); // Read as Data URL
    });
}
  return (
    <div>
      <form id="productForm" className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex m-5 border-2 border-black">
          <label htmlFor="productId">Product ID</label>
          <input type="text" id="productId" name="productId" required />
        </div>

        <label htmlFor="productTypeId">Product Type ID:</label>
        <input type="text" id="productTypeId" name="productTypeId" required />

        <label htmlFor="internalName">Internal Name:</label>
        <input type="text" id="internalName" name="internalName" required />

        <label htmlFor="upload_file">File</label>
        <input type="file" id="upload_file" name="upload_file" required />

        <label htmlFor="longDescription">Long Description:</label>
        <input
          type="text"
          id="longDescription"
          name="longDescription"
          required
        />
        <label htmlFor="primaryProductCategoryId">
          Primary Product Category ID:
        </label>
        <input
          type="text"
          id="primaryProductCategoryId"
          name="primaryProductCategoryId"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {
        <div id="result"></div>
      }
    </div>
  );
};

export default FileUp;
