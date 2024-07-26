import { Pipe, PipeTransform } from '@angular/core';
import Item from '../search/search-item.model';

@Pipe({
  name: 'sortPipe',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(items: Item[], sortKey: string, sortOrder: string, keyWord: string): Item[] {
    if (!items) return [];
    let filteredItems = this.filterItems(items, keyWord);
    return this.sortItems(filteredItems, sortKey, sortOrder);
  }
  private filterItems(items: Item[], keyWord: string): Item[] {
    if (!keyWord) return items;
    keyWord = keyWord.toLowerCase();
    return items.filter(item =>
      item.snippet.title.toLowerCase().includes(keyWord) ||
      item.snippet.description.toLowerCase().includes(keyWord)
    );
  }
  private sortItems(items: Item[], sortKey: string, sortOrder: string): Item[] {
    if (!sortKey) return items;
    if (sortKey === 'Date') {
      return items.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt);
        const dateB = new Date(b.snippet.publishedAt);
        return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      });
    }
    if (sortKey === 'Views') {
      return items.sort((a, b) => {
        const viewsA = a.statistics.viewCount;
        const viewsB = b.statistics.viewCount;
        return sortOrder === 'asc' ? +viewsA - +viewsB : +viewsB - +viewsA;
      });
    }

    return items;
  }
}
