import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay'
import { SearchBarService } from '../../../services/search-bar.service';
import { SearchOverlayComponent } from '../search-overlay/search-overlay.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatIconButton, MatIcon, OverlayModule, SearchOverlayComponent, NgClass],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchbarComponent {
  searchBarService = inject(SearchBarService);
  overlayOpen = this.searchBarService.overlayOpen;
  searchStr = this.searchBarService.searchStr
  overlayOpenFunction() {
    if (this.searchBarService.recentSearches().length !== 0) this.overlayOpen.set(true);
  }
  search(enteredStr: string) {
    if (!enteredStr) return;
    this.searchBarService.search(enteredStr)
  }
  clearSearchField() {
    this.searchBarService.clearSearchField();
  }
}
