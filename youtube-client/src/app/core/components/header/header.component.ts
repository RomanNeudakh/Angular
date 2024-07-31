import { Component, inject } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import SearchItemComponent from '../../../youtube/components/search-item/search-item.component';
import SearchbarComponent from '../search-bar/search-bar.component';
import SettingsOverlayComponent from '../settings-overlay/settings-overlay.component';
import SearchBarService from '../../services/search-bar.service';
import CustomButtonComponent from '../custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchItemComponent,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbar,
    SearchbarComponent,
    SettingsOverlayComponent,
    OverlayModule,
    CustomButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
class HeaderComponent {
  searchBarService = inject(SearchBarService);

  settingsOverlayOpen = this.searchBarService.settingsOverlayOpen;
}
export default HeaderComponent;
