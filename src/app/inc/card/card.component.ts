import {Component, Input} from '@angular/core';

@Component({
  selector: 'ps-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() value!: CardData;
}

export interface CardData {
  quantity: number;
  description: string;
  icon: string;
  subDescription: string|null;
  asc: boolean|null;
}
