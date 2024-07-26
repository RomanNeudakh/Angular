import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input, Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatListModule, NgClass, MatButtonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export default class CustomButtonComponent {
  @Input() type: string = 'button';

  @Input() fontIcon: string = '';

  @Input() buttonClass: string = '';

  @Output() buttonClick = new EventEmitter<Event>();

  @Input() matListItemMeta: boolean = false;

  @Input() matIconButton: boolean = false;

  @Input() matFab: boolean = false;

  handleClick(event: Event) {
    this.buttonClick.emit(event);
  }
}
