import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.html',
})
export class DestinationCardComponent {
  @Input() image!: string;
  @Input() title!: string;
}
