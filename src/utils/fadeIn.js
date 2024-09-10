function fadeIn(
  initialDirection,
  delay,
  animationDuration = 0.6,
  distance = 20,
) {
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
        duration: animationDuration,
        delay: delay,
      },
    },
  };
}

export default fadeIn;
