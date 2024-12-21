import React, { useState } from 'react';
import axios from 'axios';

const UploadExcel = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      // Step 1: Upload the file to the backend
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await axios.post(process.env.REACT_APP_SERVER_URI + '/api/propertyauth/upload-excel', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { secure_url } = uploadResponse.data;

      // Step 2: Process the Excel file to add properties
      const processResponse = await axios.post(process.env.REACT_APP_SERVER_URI + '/api/propertyauth/process-excel', { secure_url });
      setMessage('Properties added successfully!');
      console.log('Added Properties:', processResponse.data);
    } catch (error) {
      console.error('Error:', error.message);
      setMessage('Failed to upload and process file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload and Process'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadExcel;
