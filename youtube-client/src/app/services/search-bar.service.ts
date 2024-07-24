import { effect, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Item from '../search/search-item.model';
@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  private url = 'https://raw.githubusercontent.com/RomanNeudakh/rs_school_stage1/main/response.json';
  constructor(private http: HttpClient) {
    this.fetchJsonFile().subscribe({
      next: (data) => {
        this.listItems.set(data.items as Item[]); 
      },
      error: (error) => {
        console.error('There has been a problem with your fetch operation:', error);
      },
    });
  }
  listItems = signal<Item[]>([])
  overlayOpen = signal(false);
  recentSearches = this.isBrowser()
    ? signal<string[]>(JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]'))
    : signal<string[]>(['testSearch']);

  searchStr = signal('');
  search(searchedStr: string) {
    this.searchStr.set(searchedStr);
    this.overlayOpen.set(false);
    this.addStrToRecentSearches(searchedStr);
    // search functionallity
  }

  fetchJsonFile(): Observable<any> {
    return this.http.get(this.url);
  }

  addStrToRecentSearches(searchedStr: string) {
    const toLowerCase = searchedStr.toLowerCase();
    this.recentSearches.set([
      toLowerCase,
      ...this.recentSearches().filter((str) => str !== toLowerCase),
    ]);
  }

  deleteStrFromRecentSearch(searchedStr: string) {
    this.recentSearches.set(this.recentSearches().filter((str) => str !== searchedStr));
    if (this.recentSearches().length === 0) this.overlayOpen.set(false);
  }

  seveLocalStorageData = effect(() => {
    if (this.isBrowser()) {
      window.localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches()));
    }
  });

  isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  clearSearchField() {
    this.searchStr.set('');
    this.overlayOpen.set(true);
  }
}
