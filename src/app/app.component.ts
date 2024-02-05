import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ParcelTrackingComponent } from './parcel-tracking/parcel-tracking.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParcelTrackingComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'parcel-tracking';
}
