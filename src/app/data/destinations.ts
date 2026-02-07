import { Destination } from '../models/destination.model';

export const DESTINATIONS: Destination[] = [
  {
    name: 'INDONESIA',
    description: 'Indonesia is a beautiful country with islands and culture.',
    backgroundImage: 'assets/images/indonesia-bg.jpg',
    cards: [
      {
        title: 'Buddha Temple, Thailand',
        image: 'assets/images/card1.jpg',
        rating: 5
      },
      {
        title: 'Broken Beach, Bali',
        image: 'assets/images/card2.jpg',
        rating: 4
      }
    ]
  },
  {
    name: 'THAILAND',
    description: 'Thailand is famous for beaches and temples.',
    backgroundImage: 'assets/images/thailand-bg.jpg',
    cards: [
      {
        title: 'Bangkok Temple',
        image: 'assets/images/card3.jpg',
        rating: 5
      },
      {
        title: 'Phuket Beach',
        image: 'assets/images/card4.jpg',
        rating: 4
      }
    ]
  }
];
