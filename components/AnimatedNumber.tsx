'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: '0px 0px -50px 0px' });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString('en-US')
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        } else {
            spring.set(0);
        }
    }, [inView, spring, value]);

    return <motion.span ref={ref}>{display}</motion.span>;
}
