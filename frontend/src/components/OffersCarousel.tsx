import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
}

const OffersCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 
                 bg-white/20 hover:bg-white/40 backdrop-blur-md 
                 p-2 rounded-full text-[#d98c2b] transition shadow-md"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 
                 bg-white/20 hover:bg-white/40 backdrop-blur-md 
                 p-2 rounded-full text-[#d98c2b] transition shadow-md"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-black/50 text-white text-sm px-4 py-1 rounded-full backdrop-blur-md"
      >
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default OffersCarousel;
