export interface TimelineItem {
  date: string;
  event: string;
  note: string;
}

export const launchTimeline: TimelineItem[] = [
  { date: 'Mid-2026', event: 'Early Access Opens', note: 'Waitlist members receive private access ahead of public launch.' },
  { date: 'October 2026', event: 'Collection Preview', note: 'Private appointments open for in-person viewing in select cities.' },
  { date: 'Autumn 2026', event: 'Public Launch', note: 'Altitude I \u2014 Light Edition opens to all.' },
];
