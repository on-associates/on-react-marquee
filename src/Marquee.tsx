import * as React from 'react';

import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  loop?: number | string;
  play?: boolean;
  fillGaps?: boolean;
  onAnimationCycleComplete?: () => void;
  className?: string;
}

const Marquee = ({
  children,
  speed = 80,
  pauseOnHover = false,
  direction = 'left',
  loop = 'infinite',
  play = true,
  fillGaps = true,
  onAnimationCycleComplete,
  className = '',
}: Props) => {
  const [isMounted, setIsMounted] = React.useState(false);

  const containerRef = React.useRef<any>(null);
  const marqueeRef = React.useRef<any>(null);

  React.useEffect(() => {
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
          containerEl.appendChild(containerEl.children[0].cloneNode(true))
        }
      }

      const duration = marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;

      containerEl.style.setProperty('--marquee-duration', `${duration}s`);
      containerEl.style.setProperty('--marquee-pause-on-hover', pauseOnHover ? 'paused' : 'running');
      containerEl.style.setProperty('--marquee-direction', direction === 'left' ? 'normal' : 'reverse');
      containerEl.style.setProperty('--marquee-loop', loop);
      containerEl.style.setProperty('--marquee-play', play ? 'running' : 'paused');

      if (fillGaps) {
        setFillGaps();
      }
    }
    init();

    let resizeTimer: any;

    const onResize = () => {
      init();
      // for restarting the animation on resize
      containerEl.classList.add(styles.noAnimation);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        containerEl.classList.remove(styles.noAnimation);
      }, 300);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMounted]);

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const classNames = [styles.marquee, className].join(' ');

  return (
    <div className={classNames} ref={containerRef}>
      <div
        className={`${styles.marqueeContent} ${!fillGaps ? styles.fullWidth : ''}`}
        ref={marqueeRef}
        onAnimationIteration={onAnimationCycleComplete}
      >
        {children}
      </div>
      {!fillGaps && (
        <div className={`${styles.marqueeContent} ${styles.fullWidth}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Marquee;
