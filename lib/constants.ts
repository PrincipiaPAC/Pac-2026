export type ScheduleEntry = {
  day: string
  time: string
  speaker: string
  role: string | null
  /** YouTube Live URL from Media Services; omit when not streamed */
  livestreamUrl?: string
  /** Matches `slug` in `lib/speakers.ts` for speaker detail pages */
  speakerSlug?: string
}

export const EVENT_SCHEDULE: ScheduleEntry[] = [
  {
    day: "Thursday, April 2",
    time: "7:30–8:30 PM",
    speaker: "Francisco Cantú",
    role: "Opening Speaker",
    livestreamUrl: "https://www.youtube.com/live/_XaUH4aNxAg",
    speakerSlug: "francisco-cantu",
  },
  {
    day: "Friday, April 3",
    time: "1:00–2:00 PM",
    speaker: "Dr. Tanya Golash-Boza",
    role: null,
    livestreamUrl: "https://www.youtube.com/live/kaZ44DYc3wE",
    speakerSlug: "tanya-golash-boza",
  },
  {
    day: "Friday, April 3",
    time: "2:20–3:10 PM",
    speaker: "Dr. Laurie Vázquez Scolari",
    role: null,
    livestreamUrl: "https://www.youtube.com/live/otKsbVf5D6Y",
    speakerSlug: "laurie-vazquez-scolari",
  },
  {
    day: "Friday, April 3",
    time: "3:20–4:10 PM",
    speaker: "Lauren Blodgett",
    role: null,
  },
  {
    day: "Friday, April 3",
    time: "7:30–8:30 PM",
    speaker: "Dr. Lola Adeyemo",
    role: "Keynote Speaker",
    livestreamUrl: "https://www.youtube.com/live/9Sm8FLSXHpM",
    speakerSlug: "lola-adeyemo",
  },
]

export function getLivestreamUrlForSpeakerSlug(slug: string): string | undefined {
  return EVENT_SCHEDULE.find((e) => e.speakerSlug === slug)?.livestreamUrl
}
