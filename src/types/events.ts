export type EventItem = {
  title: string;
  /** ISO or YYYY-MM-DD */
  date: string;
  description: string;
  imageUrl?: string;
  location?: string;
  tags?: string[];
  eventUrl?: string;
};
