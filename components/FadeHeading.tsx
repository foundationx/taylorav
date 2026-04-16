'use client';

import type React from 'react';

type FadeHeadingProps = {
  text: string;
  level?: 'h2' | 'h3';
  className?: string;
};

export function FadeHeading({ text, level = 'h2', className = '' }: FadeHeadingProps) {
  const Tag = level === 'h2' ? 'h2' : 'h3';

  return (
    <Tag className={className.trim() || undefined}>
      {text}
    </Tag>
  );
}
