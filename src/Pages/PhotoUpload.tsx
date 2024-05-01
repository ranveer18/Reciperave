import { useState } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file!');
            return;
        }

        const formData = new FormData();
        formData.append('photo', selectedFile);

        try {
            await axios.post('http://localhost:5050/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file: ', error);
            alert('Failed to upload file. Please try again.');
        }
    };

    return (
        <div>
            <h2>Upload a Photo</h2>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button onClick={handleUpload} className="bg-red-700">Upload</button>
        </div>
    );
};

export default PhotoUpload;
