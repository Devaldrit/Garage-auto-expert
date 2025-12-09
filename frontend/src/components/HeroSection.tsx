import React from "react";

interface HeroSectionProps {
  backgroundUrl: string;
  logoUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundUrl, logoUrl }) => {
  return (
    <section
      className="
        relative w-full h-[650px] 
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      {/* Overlay noir léger si tu veux un meilleur contraste */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src={logoUrl}
          alt="Auto Expert Logo"
          className="w-[320px] md:w-[420px] drop-shadow-xl"
        />

        <h1 className="text-white text-3xl md:text-4xl font-bold mt-6">
          AUTO EXPERT
        </h1>

        <p className="text-white text-lg md:text-xl font-semibold mt-2">
          CARROSSERIE – MÉCANIQUE – PNEUMATIQUE
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
