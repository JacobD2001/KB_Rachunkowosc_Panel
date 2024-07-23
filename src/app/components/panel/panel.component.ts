import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../../services/google-sheets.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {
public sheetData: any[] = [];

constructor(private googleSheetsService: GoogleSheetsService) { }

ngOnInit(): void {
  this.googleSheetsService.getSheetData('Sheet1').subscribe(data => {
    if (data && data.values) {
      // Assuming the first row contains headers
      const headers = data.values[0];
      this.sheetData = data.values.slice(1).map((row: any[]) => {
        let obj: any = {};
        row.forEach((cell: any, index: number) => {
          obj[headers[index]] = cell;
        });
        return obj;
      });
    }
  });
}
}
