import { codeId, parcelInfo, parcelsInfos } from './models';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcel-tracking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parcel-tracking.component.html',
  styleUrl: './parcel-tracking.component.scss',
})
export class ParcelTrackingComponent {
  parcelCode: string = '';
  isParcelNotFound: boolean = false;
  parcelInfo!: parcelInfo | null;
  trackParcel() {
    this.isParcelNotFound = false;
    this.parcelInfo = null;
    if (
      this.parcelCode !== codeId.id1 &&
      this.parcelCode !== codeId.id2 &&
      this.parcelCode !== codeId.id3
    ) {
      this.isParcelNotFound = true;
      return;
    }
    this.parcelInfo = parcelsInfos.find((p) => p.id === this.parcelCode)
      ?.data as parcelInfo;
    console.log(this.parcelInfo);
  }
}
