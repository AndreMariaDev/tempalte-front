import { Component,OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


import { QueryOptions } from 'src/app/base/serializer';
import { Base } from '../base';
import { BaseService } from '../base.service';

export class ListBaseComponent<T extends Base> {

  displayedColumns: string[]
  dataSource: MatTableDataSource<T>;
  selection = new SelectionModel<T>(true, []);

  constructor(private appService: BaseService<T> ,displayedColumns: string[]) {
    this.displayedColumns = displayedColumns;
    let par = [];
    
    par.push({ key:'_offset',values:'1'});
    par.push({ key:'_limit',values:'10'});

    this.appService.GetByFilter(new QueryOptions(par)).subscribe(
      response => {
        this.dataSource = new MatTableDataSource<T>(response);
      },
      error => {
        console.log(error);
      }); 
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource ? this.dataSource.data.length: 0;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
