import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  templateUrl: './destination-card.html',
  styleUrls: ['./destination-card.css']
})
export class DestinationCardComponent {
  @Input() title!: string;
  @Input() image!: string;
}
