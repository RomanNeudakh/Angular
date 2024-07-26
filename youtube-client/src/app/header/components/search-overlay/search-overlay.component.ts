import { Component, computed, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import SearchBarService from '../../../services/search-bar.service';
import CustomButtonComponent from '../../../core/components/custom-button/custom-button.component';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [MatDivider, MatListModule, MatIcon, MatIconButton, CustomButtonComponent],
  templateUrl: './search-overlay.component.html',
  styleUrl: './search-overlay.component.scss',
})
export default class SearchOverlayComponent {
  searchBarService = inject(SearchBarService);

  recentSearches = computed(() => this.searchBarService.recentSearches().slice(0, 5));

  searchAction(searchStrFromRecentSearches: string) {
    this.searchBarService.search(searchStrFromRecentSearches);
  }

  deleteRecentSearch(event: Event, searchStr: string) {
    event.stopPropagation();
    this.searchBarService.deleteStrFromRecentSearch(searchStr);
  }
}
