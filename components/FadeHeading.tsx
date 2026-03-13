'use client';

import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

type FadeHeadingProps = {
  text: string;
  level?: 'h2' | 'h3';
  className?: string;
};

export function FadeHeading({ text, level = 'h2', className = '' }: FadeHeadingProps) {
  const Tag = level === 'h2' ? 'h2' : 'h3';
  const tokens = useMemo(() => text.split(/(\s+)/), [text]);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fade-letters ${isVisible ? 'letters-visible' : ''} ${className}`.trim()}
      aria-label={text}
    >
      {(() => {
        let letterIndex = 0;
        return tokens.map((token, index) => {
          if (/^\s+$/.test(token)) {
            return (
              <span key={`space-${index}`} className="fade-space" aria-hidden="true">
                {token}
              </span>
            );
          }

          return (
            <span key={`${token}-${index}`} className="fade-word">
              {Array.from(token).map((char) => {
                const currentIndex = letterIndex;
                letterIndex += 1;
                const startOpacity = 0.44 + (currentIndex % 3) * 0.02;
                return (
                  <span
                    key={`${char}-${currentIndex}`}
                    className="fade-letter"
                    style={{
                      ['--char-index' as string]: currentIndex,
                      ['--start-opacity' as string]: startOpacity
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        });
      })()}
    </Tag>
  );
}
