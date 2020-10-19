import { Component, OnInit } from '@angular/core';

import { Author } from '../author/author';
import { AuthorService } from '../author/author.service';
import { CreateBaseComponent } from '../../base/create/create.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Author> {

  author: Author;
  submitted = false;

  constructor(appService: AuthorService) {
    super(appService,Author);
  }

}
