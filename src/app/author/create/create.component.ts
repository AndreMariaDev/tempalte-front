import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { Author, AuthorViewModel } from '../author/author';
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
  view: AuthorViewModel;

  constructor(appService: AuthorService,dialog: MatDialog,formBuilder: FormBuilder) {
    super(appService,Author,dialog,formBuilder);
    this.view = new AuthorViewModel(formBuilder);
  }

  ngOnInit(): void {
    this.registerForm = this.view.getFormGroup();
  }

}
