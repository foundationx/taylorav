'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export type StageCard = {
  title: string;
  tagline: string;
  detail: string;
  image: string;
  imageAlt: string;
  specs?: string[];
};

type StageGalleryProps = {
  cards: StageCard[];
};

export function StageGallery({ cards }: StageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = galleryRef.current;
    if (!node) return;

    const stageCards = Array.from(node.querySelectorAll<HTMLElement>('[data-parallax-speed]'));
    if (!stageCards.length) return;

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      stageCards.forEach((card) => {
        const speed = Number(card.dataset.parallaxSpeed) || 0.03;
        const rect = card.getBoundingClientRect();
        const offset = (rect.top - viewportCenter) * speed;
        card.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="stage-gallery" ref={galleryRef}>
      {cards.map((card, index) => (
        <article
          key={card.title}
          className="stage-card"
          data-parallax-speed={0.02 + (index % 3) * 0.015}
        >
          <div className="stage-card-media">
            <Image
              src={card.image}
              alt={card.imageAlt}
              width={720}
              height={480}
              sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="stage-card-border" aria-hidden="true" />
            <div className="stage-card-glow" aria-hidden="true" />
          </div>
          <div className="stage-card-content">
            <p className="stage-card-tagline">{card.tagline}</p>
            <h3>{card.title}</h3>
            <p>{card.detail}</p>
            {card.specs?.length ? (
              <ul>
                {card.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
