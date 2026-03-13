'use client';

import { useEffect, useRef } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function HeroScramble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.innerHTML = '';
    const normalized = text.replace(/\\n/g, '\n');
    const lines = normalized.split('\n');
    const charData: { char: string; span: HTMLSpanElement }[] = [];

    lines.forEach((line) => {
      const lineContainer = document.createElement('span');
      lineContainer.className = 'hero-line';
      lineContainer.style.display = 'block';
      lineContainer.style.whiteSpace = 'normal';
      node.appendChild(lineContainer);

      Array.from(line).forEach((char) => {
        if (/\s/.test(char)) {
          lineContainer.appendChild(document.createTextNode(char));
          return;
        }

        const span = document.createElement('span');
        span.className = 'hero-letter';
        lineContainer.appendChild(span);
        charData.push({ char, span });
      });
    });

    const letterEntries = charData;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      letterEntries.forEach(({ char, span }) => {
        span.textContent = char;
        span.style.opacity = '1';
      });
      return;
    }

    const duration = 1200;
    let startTimestamp: number | null = null;
    let frameId: number;

    charData.forEach(({ char, span }) => {
      if (span) {
        span.textContent = letters[Math.floor(Math.random() * letters.length)];
        span.style.opacity = '0.45';
      }
    });

    const frame = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const revealCount = Math.floor(progress * letterEntries.length);

      letterEntries.forEach(({ char, span }, index) => {
        if (progress === 1 || index < revealCount) {
          span.textContent = char;
          span.style.opacity = '1';
        } else {
          span.textContent = letters[Math.floor(Math.random() * letters.length)];
          span.style.opacity = '0.85';
        }
        if (progress === 1) {
          span.style.color = '#fff';
        }
      });

      if (progress < 1) {
        frameId = requestAnimationFrame(frame);
      }
    };

    frameId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  }, [text]);

  return <span ref={ref} className="hero-scramble" role="presentation" aria-hidden="true" />;
}
