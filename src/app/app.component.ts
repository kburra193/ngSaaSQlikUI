import { Component } from '@angular/core';
import { QlikApiService } from './services/qlik-api.service';
import { Spaces } from '@qlik/api/spaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngSaaSQlikUI';

  spacesData: Spaces | null = null;

  constructor(private qlikService: QlikApiService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchSpaces();
  }

  async fetchSpaces() {
    this.qlikService
      .getSpaces()
      .then((data) => {
        this.spacesData = data;
        console.log('data', this.spacesData); // log the spaces
      })
      .catch((error) => {
        console.error('Error fetching spaces:', error);
      });
  }
}
