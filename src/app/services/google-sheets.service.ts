import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {
  private apiKey = environment.googleSheetsApiKey;
  private spreadsheetId = environment.spreadSheetId;

  constructor(private http: HttpClient) { }

  getSheetData(sheetName: string): Observable<any> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}?key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // getSheetData(sheetName: string): Observable<any> {
  //   const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}?key=${this.apiKey}`;
  //   return this.http.get<any>(url).pipe(
  //     catchError(err => {
  //       throw new Error('Error fetching sheet data: ' + err.message);
  //     })
  //   );
  // }
}
