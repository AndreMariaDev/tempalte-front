import { Component, OnInit } from '@angular/core';

import { Guid } from "../serializer";
import { Base } from '../base';
import { BaseService } from '../base.service';

export class CreateBaseComponent<T extends Base> {

  entity:T ;
  submitted = false;

  constructor(private appService: BaseService<T>,entityT:(new () => T)) { 
    this.entity = new entityT();
    var guid = new Guid();
    this.entity.Id = guid.uuid();
    this.entity.IsActive = true;
    this.entity.CreateDate = new Date();
    this.entity.UserCode = '123456';
  }

  save(): void {
    console.log(this.entity);
    this.appService.create(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          window.alert("OK");
        },
        error => {
          console.log(error);
        });
  }

}
