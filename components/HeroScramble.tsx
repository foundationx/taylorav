'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function HeroScramble({ text, triggerKey = 0 }: { text: string; triggerKey?: number }) {
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
      }, 28);
    }, 50);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [normalized, revealableCount, triggerKey]);

  let revealed = 0;

  return (
    <span className="hero-scramble" role="presentation" aria-hidden="true">
      {lines.map((line, lineIndex) => {
        // Split into word/space tokens — words are kept together with nowrap
        const tokens = line.split(/(\s+)/);
        return (
          <span key={`line-${lineIndex}`} className="hero-line">
            {tokens.map((token, tokenIndex) => {
              if (/^\s+$/.test(token)) {
                return <Fragment key={`${lineIndex}-${tokenIndex}-space`}> </Fragment>;
              }
              // Wrap each word in nowrap so it can never break mid-character
              return (
                <span key={`${lineIndex}-${tokenIndex}-word`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {Array.from(token).map((char, charIndex) => {
                    revealed += 1;
                    const isResolved = phase === 'done' || (phase === 'animating' && revealed <= tick);
                    const displayChar =
                      phase === 'idle' || isResolved
                        ? char
                        : letters[(tick + lineIndex + tokenIndex + charIndex) % letters.length];

                    return (
                      <span key={`${lineIndex}-${tokenIndex}-${charIndex}`} className="hero-letter">
                        {displayChar}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
