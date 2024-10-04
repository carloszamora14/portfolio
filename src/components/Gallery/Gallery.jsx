import { motion } from 'framer-motion';
import createMotionConfig from '../../utils/fadeIn';
import styles from './Gallery.module.css';

function Gallery({ images }) {
  const len = images.length;
  const extendedImages = [images.at(-1), ...images, images.at(0), images.at(1)];

  return (
    <motion.section
      {...createMotionConfig('down', 0.2)}
      className={styles.gallery}
      aria-label="Image Gallery"
      style={{ '--quantity': len }}
    >
      <div className={styles.content}>
        <div className={styles.imagesWrapper}>
          {extendedImages.map((image, index) => {
            const isHidden =
              index === 0 || index === len - 1 || index === len - 2;

            return (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                aria-hidden={isHidden}
                className={styles.image}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Gallery;
