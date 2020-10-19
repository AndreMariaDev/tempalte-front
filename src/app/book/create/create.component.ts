import { Component, OnInit } from '@angular/core';

import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { CreateBaseComponent } from '../../base/create/create.component';

import { Author } from '../../author/author/author';
import { AuthorService } from '../../author/author/author.service';
import { QueryOptions } from 'src/app/base/serializer';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Book>{

  authors: Array<Author>;
  book: Book;
  submitted = false;

  constructor(appService: BookService, private appAuthorService: AuthorService) {
    super(appService,Book);
    this.authors = new Array<Author>();
    let par = [];
    
    par.push({ key:'_offset',values:'1'});
    par.push({ key:'_limit',values:'10'});

    this.appAuthorService.GetByFilter(new QueryOptions(par)).subscribe(
      response => {
        console.log('GetByFilter');
        
        response.map(resp => {
          this.authors.push(resp);
          console.log(this.authors);
        })
        console.log(this.authors);
      },
      error => {
        console.log(error);
      }); 
  }

}
