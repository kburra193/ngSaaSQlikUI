import { Component } from '@angular/core';
import { QlikAppService } from '../../services/qlik-app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-qlik-app',
  templateUrl: './qlik-app.component.html',
  styleUrl: './qlik-app.component.scss',
})
export class QlikAppComponent {
  private token =
    'eyJhbGciOiJFUzM4NCIsImtpZCI6IjIwNDQ0YmU5LTA1OTMtNGU3Yi1iZDNjLTg4YzhlZmU0NTA3ZCIsInR5cCI6IkpXVCJ9.eyJzdWJUeXBlIjoidXNlciIsInRlbmFudElkIjoiSEI5cE5idXRMNWJDbXRWZmRhSGdBV0ZQRmlUOVBwekgiLCJqdGkiOiIyMDQ0NGJlOS0wNTkzLTRlN2ItYmQzYy04OGM4ZWZlNDUwN2QiLCJhdWQiOiJxbGlrLmFwaSIsImlzcyI6InFsaWsuYXBpL2FwaS1rZXlzIiwic3ViIjoiNjI0YjUwMGI1NGIyODU5ZTAzY2FlMjExIn0.6qWtjiFeuVUJ2jHjgepvObk9H21m_OTf1NivNTXm5NjAGkVEg5fNgDwHDd2M5TY2rvs4nw0CEQKlRP4LKYwkCMvHI8bW_eWygFFgxZ-Tsn_srsIAJv7BnTN0Dt0sMYLc';

  appNames: any[] = [];

  constructor(
    private qlikAppService: QlikAppService,
    private httpClient: HttpClient,
  ) {}
  async ngOnInit() {
    try {
      let header = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      });
      this.httpClient
        .get(
          'https://karthikburra93.us.qlikcloud.com/api/v1/items?resourceType=app&limit=100',
          { headers: header },
        )
        .subscribe((data: any) => {
          console.log('appnames data', data);
          this.appNames = data;
        });
    } catch (error) {
      console.error(error);
    }
  }
  qlikAppNames$ = this.qlikAppService.getMoviesByType('upcoming', 12);
  //qlikAppNames2$ = this.qlikAppService.getAppNames();
}
