import * as React from 'react'
import styles from './styles.module.css'

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
  const containerRef = React.useRef<any>(null);
  const marqueeRef = React.useRef<any>(null);

  React.useEffect(() => {
    const containerEl = containerRef.current;
    const marqueeEl = marqueeRef.current;

    const containerWidth = containerEl.clientWidth;
    const marqueeWidth = marqueeEl.clientWidth;

    const setFillGaps = () => {
      const loopCount = Math.ceil(containerEl.clientWidth / marqueeEl.clientWidth);
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
  }, []);

  const classNames = [styles.marquee, className].join(' ');

  return (
    <div className={classNames} ref={containerRef}>
      <div
        className={styles.marqueeContent}
        ref={marqueeRef}
        onAnimationIteration={onAnimationCycleComplete}
      >
        {children}
      </div>
    </div>
  )
}

export default Marquee;
