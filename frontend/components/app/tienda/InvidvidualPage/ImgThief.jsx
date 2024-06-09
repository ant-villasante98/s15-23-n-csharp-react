import { $Color } from "@/stores/colors";
import { FastAverageColor } from "fast-average-color";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ImgThief = ({ src, alt, zoom = false, ...props }) => {
  const imgRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!src) return;

    const fac = new FastAverageColor();
    const imgElement = imgRef.current;
    fac
      .getColorAsync(imgElement)
      .then((color) => {
        $Color.set(color.rgba);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [src, imgRef]);

  const handleZoomImage = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            onClick={handleZoomImage}
            className={
              "cursor-pointer fixed top-0 left-0 w-full h-full z-[60] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.img
              layoutId="zoom-image"
              src={src}
              alt={alt}
              crossOrigin="anonymous"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId="zoom-image"
        disabled={!zoom}
        onClick={handleZoomImage}
      >
        <img
          src={src}
          alt={alt}
          ref={imgRef}
          crossOrigin="anonymous"
          {...props}
        />
      </motion.button>
    </>
  );
};
