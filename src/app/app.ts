import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DriverBadge } from './components/driver-badge/driver-badge';

@Component({
  selector: 'app-mfe-driver',
  imports: [CommonModule, DriverBadge],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('mfe-driver');
}
