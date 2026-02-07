import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.html',
  styleUrls: ['./destination-card.css']
})
export class DestinationCardComponent {
  @Input() image!: string;
  @Input() title!: string;
}
