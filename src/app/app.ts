import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DriverBadge } from './components/driver-badge/driver-badge';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DriverBadge, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('mfe-driver');
}
