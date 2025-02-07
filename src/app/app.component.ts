import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
  public isActivated:boolean = false;

  public subscription :Subscription;

  constructor(private userSvc : UserService) {}

  public ngOnInit() {

    this.subscription = this.userSvc.activatedEmitter.subscribe({
      next:(result)=>{
        this.isActivated = result;
      }
    });

  }

  public ngOnDestroy() {

    this.subscription.unsubscribe();

  }
}
