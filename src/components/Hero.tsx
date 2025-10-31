import React from "react";
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

interface HeroProps {
  name?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  imageSrc: string;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  subtitle,
  ctaText,
  imageSrc,
  imageAlt = "Hero Background Picture",
}) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-200 to-gray-100 text-white pt-14">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-[100vh] object-cover object-center brightness-50"
      />

      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Hello, World! {name && <span className="pb-1"><br/>I'm {name}</span>}
        </h1>

        <h2 className="text-2xl sm:text-3xl font-medium mb-4">
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg mb-6">{subtitle}</p>
        )}

        {ctaText && (
          <HashLink to="/#projects">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              {ctaText}
            </button>
          </HashLink>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
