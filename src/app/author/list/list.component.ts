import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ListBaseComponent } from '../../base/list/list.component';
import { QueryOptions } from '../../base/serializer';

import { Author } from '../author/author'
import { AuthorService } from '../author/author.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListBaseComponent<Author> implements OnInit  {

  constructor(appService: AuthorService) {
    super(appService, ['select', 'FirstName', 'LastName', 'IsActive', 'AddBook']);
  }

  ngOnInit(): void {

  }

  checkboxLabel(row?: Author): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id}`;
  }

}
