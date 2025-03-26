import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router , RouterLink} from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';


@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    RouterLink
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  title = 'Assignment Manager Aplication';
  logTitle = 'Log In';

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(public authenticationService: AuthenticationService, private router: Router){}

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  // Déconnection
  logout(): void {
    this.authenticationService.logOut();
  }
}
