import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from 'src/app/base/base.service';
import { Book, BookSerializer } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService<Book> {

  constructor(httpClient: HttpClient) {
    super(httpClient,'https://localhost:44394/api','Book',new BookSerializer());
  }
}

