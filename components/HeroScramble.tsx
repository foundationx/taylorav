'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function HeroScramble({ text }: { text: string }) {
  const normalized = useMemo(() => text.replace(/\\n/g, '\n'), [text]);
  const lines = useMemo(() => normalized.split('\n'), [normalized]);
  const revealableCount = useMemo(
    () => Array.from(normalized).filter((char) => !/\s/.test(char)).length,
    [normalized]
  );
  const [phase, setPhase] = useState<'idle' | 'animating' | 'done'>('idle');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setPhase('idle');
    setTick(0);

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startTimeout = setTimeout(() => {
      setPhase('animating');
      let frame = 0;

      intervalId = setInterval(() => {
        frame += 1;
        setTick(frame);

        if (frame >= revealableCount + 10) {
          if (intervalId) clearInterval(intervalId);
          setPhase('done');
        }
      }, 55);
    }, 140);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [normalized, revealableCount]);

  let revealed = 0;

  return (
    <span className="hero-scramble" role="presentation" aria-hidden="true">
      {lines.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`} className="hero-line">
          {Array.from(line).map((char, charIndex) => {
            if (/\s/.test(char)) {
              return <Fragment key={`${lineIndex}-${charIndex}-space`}> </Fragment>;
            }

            revealed += 1;
            const isResolved = phase === 'done' || (phase === 'animating' && revealed <= tick);
            const displayChar =
              phase === 'idle' || isResolved
                ? char
                : letters[(tick + lineIndex + charIndex) % letters.length];

            return (
              <span key={`${lineIndex}-${charIndex}-${displayChar}`} className="hero-letter">
                {displayChar}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
