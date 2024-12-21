import React, { useState } from "react";
import axios from "axios";
import { Upload, X } from "lucide-react";
import { toast } from "react-toastify";

const PropertyUpload = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile?.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setFile(droppedFile);
      setMessage({ type: "success", content: "File selected successfully!" });
    } else {
      setMessage({
        type: "error",
        content: "Please upload an Excel file (.xlsx)",
      });
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile?.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setFile(selectedFile);
      setMessage({ type: "success", content: "File selected successfully!" });
    } else {
      setMessage({
        type: "error",
        content: "Please upload an Excel file (.xlsx)",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage({ type: "error", content: "Please select a file first!" });
      return;
    }

    try {
      setUploading(true);
      setMessage({ type: "info", content: "Uploading file..." });

      // Step 1: Upload the file to the backend
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await axios.post(
        process.env.REACT_APP_SERVER_URI + "/api/propertyauth/upload-excel",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { secure_url } = uploadResponse.data;

      // Step 2: Process the Excel file to add properties
      setMessage({ type: "info", content: "Processing file..." });

      const processResponse = await axios.post(
        process.env.REACT_APP_SERVER_URI + "/api/propertyauth/process-excel",
        { secure_url }
      );

      setMessage({
        type: "success",
        content: "Properties added successfully!",
      });
      toast.success("Properties are added successdully!");

      setFile(null);
    } catch (error) {
      console.error("Error:", error.message);
      setMessage({
        type: "error",
        content:
          error.response?.data?.message || "Failed to upload and process file",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setMessage({ type: "", content: "" });
  };

  return (
    <div className="min-h-screen bg-offwhite p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-voilet">
          Upload Properties
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ease-in-out
              ${dragActive ? "border-pink bg-lightpink/20" : "border-gray-300"}
              ${file ? "bg-lightpink/10" : ""}
            `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {!file ? (
              <>
                <Upload className="mx-auto h-12 w-12 text-pink mb-4" />
                <label className="block">
                  <span className="text-voilet font-medium">
                    Drag and drop your Excel file here, or
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".xlsx"
                    onChange={handleFileSelect}
                  />
                  <span className="text-darkpink ml-1 cursor-pointer hover:underline">
                    browse
                  </span>
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Only .xlsx files are supported
                </p>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-voilet font-medium">{file.name}</span>
                <button
                  type="button"
                  onClick={removeFile}
                  className="text-darkpink hover:text-pink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {message.content && (
            <div
              className={`p-4 rounded-lg ${
                message.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {message.content}
            </div>
          )}

          <button
            type="submit"
            disabled={!file || uploading}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white
              ${
                !file || uploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink hover:bg-darkpink transition-colors"
              }
            `}
          >
            {uploading ? "Uploading..." : "Upload Properties"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyUpload;
