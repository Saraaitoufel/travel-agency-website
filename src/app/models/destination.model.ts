export interface Destination {
  name: string;
  description: string;
  backgroundImage: string;
  cards: {
    title: string;
    image: string;
    rating: number;
  }[];
}
