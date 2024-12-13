import { motion } from "framer-motion";
import { gallery } from "../../api/gallery";
import { fadeInContainer, fadeInItem } from "../../api/animations";
import Modal from "../modal/Modal";
import { useState } from "react";

const MasonryComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const splitIntoColumns = (array, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    array.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

  const numColumns = 4;
  const columns = splitIntoColumns(gallery, numColumns);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <motion.div className="py-8" variants={fadeInContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} >


      <div className={`grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4`}>
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {column.map((item, imageIndex) => (
              <div key={imageIndex} variants={fadeInItem} className="rounded-md relative group">

                <figure className="overflow-hidden rounded-md h-full">
                  <img
                    src={`/media/${item.img}`}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-md  group-hover:scale-105 transition-all"

                  />
                </figure>
                <p className="absolute top-0 left-0 rounded-md bg-black/50 w-full h-full flex items-center justify-center group-hover:opacity-100 opacity-0 cursor-pointer transition-all text-white select-none" onClick={() => openModal(`/media/${item.img}`)}>Ver foto</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Modal
        imageUrl={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </motion.div>
  );
};

export default MasonryComponent;
