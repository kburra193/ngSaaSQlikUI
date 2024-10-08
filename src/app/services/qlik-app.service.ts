import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QlikApp, QlikAppDto } from '../types/QlikApp';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QlikAppService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'f412fcdc374f38cc4d3df630ea8d20be';
  /* private token =
    'eyJhbGciOiJFUzM4NCIsImtpZCI6IjIwNDQ0YmU5LTA1OTMtNGU3Yi1iZDNjLTg4YzhlZmU0NTA3ZCIsInR5cCI6IkpXVCJ9.eyJzdWJUeXBlIjoidXNlciIsInRlbmFudElkIjoiSEI5cE5idXRMNWJDbXRWZmRhSGdBV0ZQRmlUOVBwekgiLCJqdGkiOiIyMDQ0NGJlOS0wNTkzLTRlN2ItYmQzYy04OGM4ZWZlNDUwN2QiLCJhdWQiOiJxbGlrLmFwaSIsImlzcyI6InFsaWsuYXBpL2FwaS1rZXlzIiwic3ViIjoiNjI0YjUwMGI1NGIyODU5ZTAzY2FlMjExIn0.6qWtjiFeuVUJ2jHjgepvObk9H21m_OTf1NivNTXm5NjAGkVEg5fNgDwHDd2M5TY2rvs4nw0CEQKlRP4LKYwkCMvHI8bW_eWygFFgxZ-Tsn_srsIAJv7BnTN0Dt0sMYLc';
  appNames: any[] = []; */
  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<QlikAppDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: string) {
    return this.http.get<QlikApp>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`,
    );
  }

/*   getAppNames() {
    try {
      let header = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      });
      this.http
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
  } */
}
