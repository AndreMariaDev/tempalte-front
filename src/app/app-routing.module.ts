import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthorComponent } from './author/author/author.component';
import { CreateComponent } from './author/create/create.component';
import { ListComponent } from './author/list/list.component';
import { UpdateComponent } from './author/update/update.component';
import { BookComponent } from './book/book/book.component';

const routes: Routes = [
  // { path: 'author', component: AuthorComponent, children:[
  //   { path: 'create', component: CreateComponent },
  //   { path: 'update', component: UpdateComponent },
  //   { path: 'list', component: ListComponent }
  // ] },
  { path: 'book', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
