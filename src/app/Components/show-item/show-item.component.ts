import { Component, Input } from '@angular/core';
import { QlikApp } from '../../types/QlikApp';
import { imagesBaseUrl } from '../../constants/image-size';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showItem: QlikApp | null = null;

  imagesBaseUrl = imagesBaseUrl;
}
