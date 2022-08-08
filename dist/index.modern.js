import { useState, useRef, useEffect, createElement } from 'react';

var styles = {"marquee":"_styles-module__marquee__2bxe3","marqueeContent":"_styles-module__marqueeContent__2FT6B","fullWidth":"_styles-module__fullWidth__1aqaS","noAnimation":"_styles-module__noAnimation__Mhukv"};

const Marquee = ({
  children,
  speed: _speed = 80,
  pauseOnHover: _pauseOnHover = false,
  direction: _direction = 'left',
  loop: _loop = 'infinite',
  play: _play = true,
  fillGaps: _fillGaps = true,
  onAnimationCycleComplete,
  className: _className = ''
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const containerEl = containerRef.current;
    const marqueeEl = marqueeRef.current;

    const init = () => {
      const containerWidth = containerEl.clientWidth;
      const marqueeWidth = marqueeEl.clientWidth;

      const setFillGaps = () => {
        const loopCount = Math.ceil(containerEl.clientWidth / marqueeEl.clientWidth);

        while (containerEl.children.length > 1) {
          containerEl.removeChild(containerEl.lastChild);
        }

        for (let index = 0; index < loopCount; index++) {
          containerEl.appendChild(containerEl.children[0].cloneNode(true));
        }
      };

      const duration = marqueeWidth < containerWidth ? containerWidth / _speed : marqueeWidth / _speed;
      containerEl.style.setProperty('--marquee-duration', `${duration}s`);
      containerEl.style.setProperty('--marquee-pause-on-hover', _pauseOnHover ? 'paused' : 'running');
      containerEl.style.setProperty('--marquee-direction', _direction === 'left' ? 'normal' : 'reverse');
      containerEl.style.setProperty('--marquee-loop', _loop);
      containerEl.style.setProperty('--marquee-play', _play ? 'running' : 'paused');

      if (_fillGaps) {
        setFillGaps();
      }
    };

    init();
    let resizeTimer;

    const onResize = () => {
      init();
      containerEl.classList.add(styles.noAnimation);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        containerEl.classList.remove(styles.noAnimation);
      }, 300);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMounted]);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const classNames = [styles.marquee, _className].join(' ');
  return createElement("div", {
    className: classNames,
    ref: containerRef
  }, createElement("div", {
    className: `${styles.marqueeContent} ${!_fillGaps ? styles.fullWidth : ''}`,
    ref: marqueeRef,
    onAnimationIteration: onAnimationCycleComplete
  }, children), !_fillGaps && createElement("div", {
    className: `${styles.marqueeContent} ${styles.fullWidth}`
  }, children));
};

export default Marquee;
//# sourceMappingURL=index.modern.js.map
