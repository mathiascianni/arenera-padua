import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Modal({ imageUrl, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50 px-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white p-2 rounded-md relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={imageUrl}
          alt="Modal content"
          className="max-w-full max-h-[80vh] rounded-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <div
        className="absolute top-5 right-5 text-white"
        onClick={onClose}
      >
        <button className="bg-primary rounded-full w-12 h-12 hover:bg-secondary transition-colors hover:text-dark font-black flex items-center justify-center">
          X
        </button>
      </div>
    </motion.div>
  );
}
