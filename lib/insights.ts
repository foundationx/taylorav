export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  date: string;
  readTime: string;
  eyebrow: string;
  sections: InsightSection[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: 'mountain-resort-load-in-checklist',
    title: 'Mountain resort load-in checklist',
    description:
      'A field checklist for resort venues in Park City and Sundance, covering dock access, snow plans, redundant power, and labor timing.',
    summary:
      'A step-by-step rundown for coordinating docks, snow removal, and redundant power for Park City and Sundance venues.',
    date: '2026-02-20',
    readTime: '5 min read',
    eyebrow: 'Resort logistics',
    sections: [
      {
        heading: 'Start with the road, not the ballroom',
        paragraphs: [
          'Mountain venues fail early when access planning starts too late. Confirm truck route restrictions, weather contingencies, loading dock dimensions, and who controls snow removal before finalizing labor calls.',
          'If the site has steep service drives or timed dock windows, build those limits into the run-of-show. A perfect ballroom design does not help if the gear cannot arrive on schedule.'
        ]
      },
      {
        heading: 'Treat power and heat as part of show readiness',
        paragraphs: [
          'Temporary structures, exterior stage wings, and remote control positions need a power map that accounts for generator backup, cable protection, and overnight temperature swings.',
          'Cold weather changes battery behavior, condensation risk, and crew pacing. Top-tier production notes should call those out explicitly instead of assuming a normal indoor load-in.'
        ]
      },
      {
        heading: 'Document venue-specific friction',
        paragraphs: [
          'Every resort has one or two quirks that affect schedule: guest traffic, elevator bottlenecks, valet interference, or short quiet-hour windows. Capture them in the advance and hand them to every department lead.',
          'That single page of venue-specific reality saves more time than another abstract equipment list.'
        ]
      }
    ]
  },
  {
    slug: 'hybrid-keynote-signal-flow',
    title: 'Hybrid keynote signal flow',
    description:
      'A practical guide to routing confidence feeds, comms, audio buses, and redundant streaming paths for hybrid corporate events.',
    summary:
      'How we route audio, comms, and streaming redundancies so in-room and remote audiences stay in sync.',
    date: '2026-01-31',
    readTime: '6 min read',
    eyebrow: 'Hybrid production',
    sections: [
      {
        heading: 'Build separate experiences from one show file',
        paragraphs: [
          'Hybrid events break when the room mix becomes the stream mix. In-room reinforcement, confidence playback, program recording, and webcast delivery need separate outputs with clear ownership.',
          'The audience in the room can tolerate a different balance than the remote audience. That is normal, and the signal flow should be designed around it.'
        ]
      },
      {
        heading: 'Redundancy needs named failover points',
        paragraphs: [
          'A backup encoder is not enough if nobody knows when to cut to it. Mark the decision points for audio, video, internet, playback, and remote presenters before rehearsal starts.',
          'When each failover point has an owner, the show recovers in seconds instead of turning into an on-comms debate.'
        ]
      },
      {
        heading: 'Cueing matters more than gear count',
        paragraphs: [
          'Most hybrid errors come from timing: late lower thirds, missed walk-ons, muted return audio, or presenters starting before remote confidence is live.',
          'That is why the best hybrid control rooms behave like live television. Clear calls, disciplined checklists, and rehearsed transitions outperform improvisation every time.'
        ]
      }
    ]
  },
  {
    slug: 'county-fair-mobile-stage-specs',
    title: 'County fair mobile stage specs',
    description:
      'A comparison framework for mobile stage footprints, setup timing, staffing, and wind planning for civic and county-fair productions.',
    summary:
      'Compare staging footprints, build times, and staffing requirements for civic events and county fairgrounds.',
    date: '2025-12-15',
    readTime: '4 min read',
    eyebrow: 'Civic staging',
    sections: [
      {
        heading: 'Pick the footprint from audience shape and headline weight',
        paragraphs: [
          'A mobile stage choice should be tied to sightlines, monitor world needs, banner treatment, and the kind of act stepping onstage, not just the largest size available.',
          'For civic shows, the wrong footprint usually creates side-stage congestion and weak front-of-house positions long before it creates a deck-size problem.'
        ]
      },
      {
        heading: 'Setup timing changes with site discipline',
        paragraphs: [
          'Fairgrounds look easy on paper, but utility conflicts, fencing, concession traffic, and last-minute vendor moves can turn a straightforward setup into a delayed show call.',
          'The cleanest plans assign arrival windows for staging, audio, lighting, and LED so the site does not lock itself up during load-in.'
        ]
      },
      {
        heading: 'Write wind and weather decisions in advance',
        paragraphs: [
          'If the site needs wind holds, banner removal thresholds, or lightning procedures, those limits should be agreed before the public arrives.',
          'Top-tier staging teams do not invent weather policy on the headset. They advance it, brief it, and make sure promoter and venue leadership know the trigger points.'
        ]
      }
    ]
  },
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}
