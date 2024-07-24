import { Component, computed, inject } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';
import { CommonModule } from '@angular/common';
import SearchItemComponent from '../search-item/search-item.component';
@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
class SearchResultsComponent {
  searchBarService = inject(SearchBarService);
  listItems = computed(() => this.searchBarService.listItems());
}
export default SearchResultsComponent;
