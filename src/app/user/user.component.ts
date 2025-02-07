import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public id: number;

  constructor(private route: ActivatedRoute , private userSvc : UserService) {}

  public ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

  }

  public onActivateUser(){

    this.userSvc.activatedEmitter.next(true);

  }

}
