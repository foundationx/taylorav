import Image from "next/image";
import { Hero } from "../../components/Hero";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FadeHeading } from "../../components/FadeHeading";
import { StageGallery, StageCard } from "../../components/StageGallery";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staging · Stage decks, truss, and rigging",
  description:
    "Taylor AV stages, truss, and rigging crews build arenas, ballrooms, and resort venues across the Wasatch Front with modular stage platforms and safe execution.",
  alternates: { canonical: '/staging' },
};

const stagingGallery: StageCard[] = [
  {
    title: "Stageline SL250",
    tagline: "Hydraulic roof stage",
    image: "/assets/hero-stage.jpg",
    imageAlt: "Stageline SL250 delivering an outdoor event",
    detail:
      "Our largest hydraulic roof stage — fast to deploy and engineered for outdoor concerts, broadcast launches, and large-scale galas. Durable build, integrated stairs, and a hydraulic roof that goes up in two hours.",
    specs: ["Size: 32' x 24'", "Setup: 2 hrs", "Wind rating: 90 mph"],
  },
  {
    title: "Stageline SL75",
    tagline: "VIP & corporate pods",
    image: "/assets/staging.jpg",
    imageAlt: "Stageline SL75 stage up close",
    detail:
      "Compact 24×16 profile with ADA ramps, modular catwalks, and lighting grids for executive presentations, product reveals, and elevated plazas.",
    specs: ["Size: 24' x 16'", "Crew: 2 techs", "Add-ons: branded scrims"],
  },
  {
    title: "22×24 mobile stage",
    tagline: "Road-ready reliability",
    image: "/assets/concerts-events.jpg",
    imageAlt: "Mobile stage assembly",
    detail:
      "Road-ready stage modules with hydraulic lifts and crisp sightlines, perfect for festivals, community hubs, and adaptable broadcast sets.",
    specs: [
      "Deck height: 4'-7'",
      "Roof load: 6,500 lbs",
      "Optional: LED walls",
    ],
  },
  {
    title: "24×14 staging footprint",
    tagline: "High-impact decks",
    image: "/assets/lighting-staging.jpg",
    imageAlt: "Illuminated stage deck",
    detail:
      "Sculpted 24×14 frame with ADA ramps, branded skirts, and cable channels that balance load-in speed with cinematic presentation.",
    specs: [
      "Modular: 4x8 panels",
      "ADA ramp ready",
      "Cable management built-in",
    ],
  },
  {
    title: "Mobile Studio Suite",
    tagline: "Production command",
    image: "/assets/live-streaming.jpg",
    imageAlt: "Mobile studio rig",
    detail:
      "24×40 command trailer with climate control, broadcast power, and hospitality. Perfect for remote broadcasts, film sets, and VIP hospitality.",
    specs: [
      "Footprint: 24' x 40'",
      "Power: 200A distro",
      "Zones: control + lounge",
    ],
  },
  {
    title: "Truss & rigging packages",
    tagline: "Architectural frames",
    image: "/assets/community-events.jpg",
    imageAlt: "Truss lighting grid",
    detail:
      "Truss towers, rigging hardware, scenic frames, and LED mounting points that integrate with scenic drops, finish lines, and structural design elements.",
    specs: ['Box truss 12"-20"', "Certified riggers", "PE-stamped drawings"],
  },
  {
    title: "Decks & risers",
    tagline: "Bespoke geometry",
    image: "/assets/services-bg.jpg",
    imageAlt: "Modular stage risers",
    detail:
      "4×8, 6×8, and 3×8 deck modules plus chorus risers, stairs, and ADA packages that let you build custom ceremony, lounge, or interview stages.",
    specs: [
      'Height: 16"-72"',
      "Surface: black or custom wrap",
      "Handrails & skirting",
    ],
  },
];

export default function StagingPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Staging' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Staging • Decks, Truss & Rigging"
        title="Stages and rigging for every scale."
        description="Modular decks, hydraulic Stageline platforms, and certified riggers keep the focus on creative intent while our crews handle load-in and strike."
        image="/assets/staging.jpg"
        imageAlt="Modular stage setup with lighting"
        backgroundVideo={{
          youtubeId: "Z1vgU0Xnnws",
          poster: "/assets/staging.jpg",
        }}
        videoFullBleed
        taglineWords={["Decks", "Truss", "Crew"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Modular stage decks & truss." />
            <p className="content-narrow">
              Lightweight, transportable builds adapt to film premieres,
              festivals, and corporate plazas. Every install is drawn in CAD,
              rehearsed, and choreographed so the staging looks couture and
              strikes on time.
            </p>
            <StageGallery cards={stagingGallery} />
            <SectionCTA
              heading="Need help choosing the right footprint?"
              body="Send us the site plan or crowd layout and we'll match the proper deck size, wind rating, and rigging package."
              primaryHref="/contact"
              primaryLabel="Plan my stage"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk to staging"
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Crew-ready execution." />
            <p className="content-narrow">
              Riggers arrive early with checklists, structural calculations, and
              safety briefings. Our technical crews communicate via headsets and
              production hubs to keep deck builds, flying points, and lighting
              cues on the same beat.
            </p>
            <div className="media-card">
              <div className="image-frame">
                <Image
                  src="/assets/lighting-staging.jpg"
                  alt="Stage lighting rig"
                  width={960}
                  height={720}
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
              <div className="media-card-content">
                <h3>Safety & precision at every move.</h3>
                <p>
                  We plan load-in paths, union breaks, and sacred strike windows
                  so the venue stays intact and the next act can begin without
                  delay.
                </p>
                <p>
                  Stage managers, riggers, and lighting techs share one
                  production map so the show stays beautiful from the first
                  rehearsal to strike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h3>All of our staging packages include crew leadership.</h3>
            <p>
              Request a quote to pair the right stage, truss, and technicians
              for your festival, concert, or corporate event—no matter how
              remote. We keep the rigging safe, the lighting cinematic, and the
              strike discreet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
