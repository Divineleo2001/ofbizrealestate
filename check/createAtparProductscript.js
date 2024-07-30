document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const productId = document.getElementById('productId').value;
    const productTypeId = document.getElementById('productTypeId').value;
    const internalName = document.getElementById('internalName').value;
    const uploadFile = document.getElementById('upload_file').files[0];
    const longDescription = document.getElementById('longDescription').value;
    const primaryProductCategoryId = document.getElementById('primaryProductCategoryId').value;

    try {

        console.log(uploadFile);
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
        });
        console.log(body)

        const response = await fetch('http://backend-server:8089/rest/services/createAtparProductByEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyTG9naW5JZCI6ImFkbWluIiwiaXNzIjoiQXBhY2hlT0ZCaXoiLCJleHAiOjE3MjIyNDYxMjYsImlhdCI6MTcyMjI0NDMyNn0.GLH8AVRUuvk3urHTVGOGUWGzSmavQUICtwv-RrZBTTGkGmCLbSMqo_doj-XsDbCagy04HfcnpajQXjlikHBpBg'            
            },
            body: body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        displayResult(result);
    } catch (error) {
        console.error('Error creating product:', error);
    }
});

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

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = JSON.stringify(data, null, 2);
}