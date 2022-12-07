import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-date',
  templateUrl: './table-date.component.html',
  styleUrls: ['./table-date.component.css']
})
export class TableDateComponent {
  @Input() primaryText: string | undefined;
  @Input() secondaryText: string | undefined;
}
