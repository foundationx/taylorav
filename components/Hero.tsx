'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import { trackEvent } from '../lib/analytics';
import { HeroScramble } from './HeroScramble';

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  backgroundVideo?: { src?: string; type?: string; poster?: string; youtubeId?: string };
  taglineWords?: string[];
  parallaxSpeed?: number;
  videoFullBleed?: boolean;
  animateTitle?: boolean;
};

export function Hero(props: HeroProps) {
  const {
    eyebrow,
    title,
    description,
    image,
    imageAlt,
    backgroundVideo,
    taglineWords,
    parallaxSpeed = 0.12,
    videoFullBleed = false,
    animateTitle = true
  } = props;
  const normalizedHeading = useMemo(() => title.replace(/\\n/g, '\n'), [title]);
  const headingLines = useMemo(() => normalizedHeading.split('\n'), [normalizedHeading]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;

    const handle = () => {
      const rect = node.getBoundingClientRect();
      const move = (window.innerHeight - rect.top) * parallaxSpeed * 0.08;
      node.style.transform = `translate3d(0, ${move}px, 0)`;
    };

    const raf = () => requestAnimationFrame(handle);
    window.addEventListener('scroll', raf, { passive: true });
    handle();

    return () => {
      window.removeEventListener('scroll', raf);
    };
  }, [parallaxSpeed]);

  return (
    <section className={`hero ${videoFullBleed && backgroundVideo ? 'hero-video-full' : ''}`} aria-label={`${eyebrow} hero`}>
      {backgroundVideo ? (
        <div className="hero-video-shell" aria-hidden="true">
          {backgroundVideo.youtubeId ? (
            <iframe
              className="hero-video"
              src={`https://www.youtube-nocookie.com/embed/${backgroundVideo.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${backgroundVideo.youtubeId}&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
              title="Background video"
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
            />
          ) : backgroundVideo.src ? (
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster={backgroundVideo.poster ?? image}
              preload="auto"
            >
              <source src={backgroundVideo.src} type={backgroundVideo.type ?? 'video/mp4'} />
            </video>
          ) : null}
        </div>
      ) : null}
      <div className="container hero-grid">
        {!(videoFullBleed && backgroundVideo) ? (
          <div className="hero-visual image-frame" ref={imageRef}>
            <Image
              src={image}
              alt={imageAlt}
              width={1400}
              height={1000}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        ) : null}
        <div className="hero-content">
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1>
            {animateTitle ? (
              <>
                <span className="hero-text">
                  <span className="hero-static" aria-hidden="true">
                    {headingLines.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < headingLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </span>
                  <HeroScramble text={normalizedHeading} />
                </span>
                <span className="sr-only">{normalizedHeading.replace(/\n/g, ' ')}</span>
              </>
            ) : (
              headingLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headingLines.length - 1 ? <br /> : null}
                </span>
              ))
            )}
          </h1>
          <p className="hero-lede">{description}</p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href="/contact"
              onClick={() => trackEvent('cta_click', { key: 'hero_quote', label: 'Request a Quote' })}
            >
              Request a Quote
            </Link>
            <a
              className="button button-ghost"
              href="tel:+18015201699"
              onClick={() => trackEvent('cta_click', { key: 'hero_call', label: 'Call +1 (801) 520-1699' })}
            >
              Call +1 (801) 520-1699
            </a>
          </div>
          {taglineWords?.length ? (
            <p className="hero-tagline" aria-hidden="true">
              {taglineWords.map((word, index) => (
                <span key={`${word}-${index}`} className="split-word" style={{ ['--word' as string]: index + 1 }}>
                  {word}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
