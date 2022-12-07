import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent implements OnInit {
  @Input() status: string | undefined;
  backgroundColor: string = "#F5F9FF";
  textColor: string = "#009FF5";

  ngOnInit(): void {
    if (this.status === "PROCESSED") {
      this.backgroundColor = "#E8F5E9";
      this.textColor = "#1B5E20";
    }
  }
}
