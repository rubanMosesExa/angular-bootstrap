import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-name',
  templateUrl: './table-name.component.html',
  styleUrls: ['./table-name.component.css']
})
export class TableNameComponent {
  @Input() name: string | undefined;
  @Input() docTypeName: string | undefined;

  constructor() {
  }
  ngOnInit() {
  }
}
