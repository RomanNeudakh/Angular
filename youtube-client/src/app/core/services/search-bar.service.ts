import { effect, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Item from '../../youtube/models/search-item.model';
import { SearchResponse } from '../../youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class SearchBarService {
  private url = 'https://raw.githubusercontent.com/RomanNeudakh/rs_school_stage1/main/response.json';

  private fullListItems: Item[] = [];

  constructor(private http: HttpClient) {
    this.fetchJsonFile().subscribe({
      next: (data: SearchResponse) => {
        this.listItems.set(data.items as Item[]);
        this.fullListItems = data.items;
      },
    });
  }

  keyWord = signal('');

  sortKey = signal('Date');

  sortOrder = signal('asc');

  listItems = signal<Item[]>([]);

  overlayOpen = signal(false);

  settingsOverlayOpen = signal(false);

  recentSearches = SearchBarService.isBrowser()
    ? signal<string[]>(JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]'))
    : signal<string[]>(['testSearch']);

  searchStr = signal('');

  search(searchedStr: string) {
    this.searchStr.set(searchedStr);
    this.overlayOpen.set(false);
    this.addStrToRecentSearches(searchedStr);
    this.listItems.set(this.fullListItems.filter((item) => item.snippet.title
      .toLocaleLowerCase()
      .includes(searchedStr.toLowerCase())));
    // search functionallity
  }

  fetchJsonFile(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.url);
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
    if (SearchBarService.isBrowser()) {
      window.localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches()));
    }
  });

  static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  clearSearchField() {
    this.searchStr.set('');
    this.overlayOpen.set(true);
  }
}
