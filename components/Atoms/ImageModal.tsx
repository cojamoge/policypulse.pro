// If you're using TypeScript, the file extension should be .tsx instead of .jsx
import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, src, alt, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div id="modal-backdrop" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={handleOutsideClick}>
      <div className="relative">
        <button onClick={onClose} className="absolute right-2 top-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-200">
          <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img src={src} alt={alt} className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>
  );
};

export default ImageModal;

