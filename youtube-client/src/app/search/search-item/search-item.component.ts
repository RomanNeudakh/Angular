import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import Item from '../search-item.model';
@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [MatTooltipModule, CommonModule, MatIconModule, MatCardModule],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
class SearchItemComponent {
  @Input() item!: Item;
}
export default SearchItemComponent;
