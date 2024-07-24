import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../services/google-sheets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  private sheetName = 'test';
  public sheetData: any[] = [];
  public headers: string[] = [];
  public rows: any[] = [];

  constructor(private googleSheetsService: GoogleSheetsService) {}

  ngOnInit(): void {
    this.googleSheetsService.getSheetData(this.sheetName).subscribe((data: any) => {
      //console.log(data);
      if (data && data.values && data.values.length > 0) {
        this.headers = data.values[0];
        this.rows = data.values.slice(1);
        //console.log('headers', this.headers);
        //console.log('rows', this.rows);
      }
    });
  }
}
