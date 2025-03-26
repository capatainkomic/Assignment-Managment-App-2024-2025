import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet , RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterOutlet,
    SidebarComponent,
    ToolbarComponent],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment Manager Application';

  sidebarToggled = true;

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
