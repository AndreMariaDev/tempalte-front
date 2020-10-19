import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { ListBaseComponent } from '../../base/list/list.component';
import { QueryOptions } from '../../base/serializer';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListBaseComponent<Book>  implements OnInit {

  constructor(appService: BookService) {

    super(appService, ['select', 'Name', 'ISBN','IsActive', 'Author']);
    let par = [];
    
    par.push({ key:'_offset',values:'1'});
    par.push({ key:'_limit',values:'10'});

    appService.GetByFilter(new QueryOptions(par)).subscribe(
      response => {
        this.dataSource = new MatTableDataSource<Book>(response);
      },
      error => {
        console.log(error);
      }); 
  }

  ngOnInit(): void {

  }

  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id}`;
  }

}
