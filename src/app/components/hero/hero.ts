import { Component } from '@angular/core';
import { DESTINATIONS } from '../../data/destinations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {

  destinations = DESTINATIONS;
  currentIndex = 0;

  get currentDestination() {
    return this.destinations[this.currentIndex];
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.destinations.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.destinations.length) % this.destinations.length;
  }
}
