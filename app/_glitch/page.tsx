'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Glitch() {
  const glitchRef = useRef(null);
  const redRef = useRef(null);
  const blueRef = useRef(null);

  useGSAP(() => {
    gsap.to(glitchRef.current, {
      skewX: 3,
      duration: 0.12,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });

    gsap.to(redRef.current, {
      x: -3,
      duration: 0.08,
      repeat: -1,
      yoyo: true,
      ease: 'steps(2)',
    });

    gsap.to(blueRef.current, {
      x: 3,
      duration: 0.08,
      repeat: -1,
      yoyo: true,
      ease: 'steps(2)',
    });

    const burst = () => {
      gsap.fromTo(
        [redRef.current, blueRef.current],
        { x: gsap.utils.random(-20, 20) },
        {
          x: 0,
          duration: 0.05,
          ease: 'none',
          onComplete: () => setTimeout(burst, gsap.utils.random(300, 1200)),
        },
      );
    };

    burst();
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden select-none">
      <h1
        ref={glitchRef}
        className="relative text-white text-[6rem] md:text-[8rem] font-black uppercase tracking-[4px]"
      >
        GLITCH
        <span
          ref={redRef}
          className="absolute inset-0 text-red-500"
          style={{
            clipPath: 'polygon(0 5%, 100% 5%, 100% 25%, 0 25%)',
            opacity: 0.8,
          }}
        >
          GLITCH
        </span>
        <span
          ref={blueRef}
          className="absolute inset-0 text-cyan-400"
          style={{
            clipPath: 'polygon(0 70%, 100% 70%, 100% 90%, 0 90%)',
            opacity: 0.8,
          }}
        >
          GLITCH
        </span>
      </h1>

      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100%_3px] opacity-[0.05]" />
    </div>
  );
}
