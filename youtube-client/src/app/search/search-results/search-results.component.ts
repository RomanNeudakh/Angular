import { Component, computed, inject } from '@angular/core';
import { SearchBarService } from '../../services/search-bar.service';
import { CommonModule } from '@angular/common';
import SearchItemComponent from '../search-item/search-item.component';
import { SortPipe } from '../../pipes/sort-pipe.pipe';
@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchItemComponent, SortPipe],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
class SearchResultsComponent {
  searchBarService = inject(SearchBarService);
  listItems = computed(() => this.searchBarService.listItems());
  sortKey = this.searchBarService.sortKey;
  sortOrder = this.searchBarService.sortOrder;
  keyword = this.searchBarService.keyWord;
}
export default SearchResultsComponent;
