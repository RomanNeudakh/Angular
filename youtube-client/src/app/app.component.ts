import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './core/components/header/header.component';
import SearchResultsComponent from './youtube/components/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
class AppComponent {
  title = 'youtube-client';
}
export default AppComponent;
