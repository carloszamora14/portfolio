function fadeIn(initialDirection, delay, duration, distance) {
  const initialPosition = {};

  switch (initialDirection) {
    case 'left':
      initialPosition.x = -distance;
      break;
    case 'right':
      initialPosition.x = distance;
      break;
    case 'up':
      initialPosition.y = -distance;
      break;
    case 'down':
      initialPosition.y = distance;
      break;
    default:
      initialPosition.y = distance;
      break;
  }

  return {
    hidden: { opacity: 0, ...initialPosition },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
}

function createMotionConfig(direction = 'down', delay = 0.2, amount = 0.2) {
  const variants = fadeIn(direction, delay, 0.6, 20);

  return {
    variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: amount },
  };
}

export default createMotionConfig;
