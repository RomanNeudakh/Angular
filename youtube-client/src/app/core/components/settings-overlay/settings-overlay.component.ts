import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { NgClass, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import SearchBarService from '../../services/search-bar.service';

@Component({
  selector: 'app-settings-overlay',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatCheckboxModule,
    MatSelectModule,
    NgClass,
    NgIf,
    MatInputModule],
  templateUrl: './settings-overlay.component.html',
  styleUrl: './settings-overlay.component.scss',
})
export default class SettingsOverlayComponent {
  searchBarService = inject(SearchBarService);

  sortKey = this.searchBarService.sortKey;

  sortOrder = this.searchBarService.sortOrder;

  keyWord = this.searchBarService.keyWord;

  onKeyWordInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchBarService.keyWord.set(inputElement.value);
  }
}
