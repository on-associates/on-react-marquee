import * as React from 'react';
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
declare const Marquee: ({ children, speed, pauseOnHover, direction, loop, play, fillGaps, onAnimationCycleComplete, className, }: Props) => JSX.Element;
export default Marquee;
