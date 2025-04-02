import { useState } from 'react';

const Carrusel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "../../public/images-home/carrucel/1.png",
    "../../public/images-home/carrucel/2.png",
    "../../public/images-home/carrucel/3.png"
  ];

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto pt-8  px-5">
      {/* Imágenes del carrusel */}
      <div className="overflow-hidden relative rounded-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Imagen ${i + 1}`} className="w-full flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevImage}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-lg"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-lg"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carrusel;