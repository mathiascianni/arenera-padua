import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { gallery } from "../../api/gallery";
import { motion } from "framer-motion";
import { fadeInContainer, fadeInItem } from "../../api/animations";
import Modal from "../modal/Modal";
import { Title } from "../ui";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery = gallery.slice(0, 4);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <motion.div
        variants={fadeInItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Title hierachy="h2">Da un vistazo a la <span className="text-primary">Galería</span></Title>

      </motion.div>

      <motion.figure
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        variants={fadeInContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredGallery.map((image, index) => (
          <motion.div key={index} variants={fadeInItem} className="rounded-md relative group aspect-video" >
            <figure className="overflow-hidden rounded-md">
              <img
                src={`/media/${image.img}`}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md aspect-video group-hover:scale-105 transition-all"

              />
            </figure>
            <p className="absolute top-0 left-0 rounded-md bg-black/50 w-full h-full flex items-center justify-center group-hover:opacity-100 opacity-0 cursor-pointer transition-all text-white select-none" onClick={() => openModal(`/media/${image.img}`)}>Ver foto</p>
          </motion.div>
        ))}
      </motion.figure>

      <NavLink
        to="/galery"
        className="relative text-xl w-fit ml-auto block after:block after:content-[''] after:absolute after:h-[2px] after:bg-secondary after:w-full after:scale-x-0 after:-bottom-1 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
      >
        Ver galería completa &rarr;
      </NavLink>

      {/* Modal */}
      <Modal
        imageUrl={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
