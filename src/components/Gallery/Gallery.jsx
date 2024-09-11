import styles from './Gallery.module.css';

function Gallery({ images }) {
  const len = images.length;
  const extendedImages = [images.at(-1), ...images, images.at(0), images.at(1)];

  return (
    <section
      className={styles.gallery}
      aria-label="Image Gallery"
      role="region"
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
    </section>
  );
}

export default Gallery;
