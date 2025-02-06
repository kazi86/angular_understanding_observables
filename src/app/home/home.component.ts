import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  public firstSubscription : Subscription;

  constructor() { }

  public ngOnInit() {

    // this.firstSubscription = interval(1000).subscribe({
    //   next:(count)=>{
    //     console.log(count)
    //   }
    // });

    const customObservable = Observable.create((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count == 5){
          observer.complete();
        }
        if(count>5){
          observer.error(new Error('Count value greater than 5'));
        }
        count++;
      },1000);
    });

    this.firstSubscription = customObservable.pipe
    (map((data :number)=>{
      return ('Round' + (data + 1));
    })).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        alert(`Error ${err}`);
      },
      complete:()=>{
        console.log('Observable is now complete');
      }
    });

  }

  public ngOnDestroy() {

    this.firstSubscription.unsubscribe();

  }

}
