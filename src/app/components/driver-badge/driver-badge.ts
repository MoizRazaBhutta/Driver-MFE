import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-driver-badge',
  imports: [],
  templateUrl: './driver-badge.html',
  styleUrl: './driver-badge.scss',
})
export class DriverBadge {
  @Input() driverName = 'Alex Mercer';
  @Input() status = 'On Duty / En Route';
  @Input() vehicleId = 'TRK-8802';
  @Input() rating = '4.95';
}
