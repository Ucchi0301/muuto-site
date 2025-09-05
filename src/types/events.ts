export type EventItem = {
  title: string;
  /** ISO or YYYY-MM-DD */
  date: string;
  description: string;
  imageUrl?: string;
  href?: string;
  location?: string;
  price?: string;
  tags?: string[];
  eventUrl?: string;
};
