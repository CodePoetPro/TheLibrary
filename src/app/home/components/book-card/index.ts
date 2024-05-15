import { Component, Input } from '@angular/core';

import { Work } from '../../../types';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() data!:Work;
}
