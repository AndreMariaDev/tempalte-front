import { OnInit } from '@angular/core';

import { Guid } from "./serializer";
import { Base } from './base';
import { BaseService } from './base.service';

export class BaseComponent<T extends Base>  implements OnInit {

  submitted = false;
  constructor(private appService: BaseService<T> ,private entity: T) { }

  ngOnInit(): void {
    var guid = new Guid();
    this.entity.Id = guid.uuid();
    this.entity.IsActive = true;
    this.entity.CreateDate = new Date();
    this.entity.UserCode = '123456';
  }

  save(): void {

    console.log(JSON.stringify(this.entity));
    this.appService.create(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  update(): void {

    console.log(JSON.stringify(this.entity));
    this.appService.create(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
