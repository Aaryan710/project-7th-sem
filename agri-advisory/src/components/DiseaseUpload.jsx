import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { validateImageFile } from '../utils/helpers';

export default function DiseaseUpload({ onImageSelect, isLoading = false }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {
    const validation = validateImageFile(file);

    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setError('');

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      onImageSelect(file);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setPreview(null);
    setError('');
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-agri-green mb-6">Upload Crop Leaf Image</h3>

      {preview ? (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-gray-100">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
            >
              <X size={20} />
            </button>
          </div>

          <button
            onClick={() => document.getElementById('file-input').click()}
            className="btn-secondary w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Change Image'}
          </button>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
            dragActive
              ? 'border-agri-green bg-green-50'
              : 'border-gray-300 hover:border-agri-green'
          }`}
        >
          <Upload className="w-12 h-12 mx-auto mb-3 text-agri-green" />
          <h4 className="font-semibold text-gray-800 mb-1">
            Drag and drop your image here
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            or click to select a file
          </p>
          <p className="text-xs text-gray-500 mb-4">
            JPG, PNG, or WebP • Max 5MB
          </p>

          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />

          <button
            onClick={() => document.getElementById('file-input').click()}
            className="btn-primary"
          >
            Select Image
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}
