import { Component, Input } from '@angular/core';
import { QlikApp, QlikAppDto } from '../../types/QlikApp';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() appNames: QlikApp[] = [];
  @Input() title = '';
}
