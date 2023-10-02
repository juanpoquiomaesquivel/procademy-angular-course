import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularObservables';

  // USING OBSERVABLE CONSTRUCTOR
  myObservable = new Observable((observer) => {
    console.log('Observable starts')
    setTimeout(() => { observer.next("1") }, 1000)
    setTimeout(() => { observer.next("2") }, 2000)
    setTimeout(() => { observer.next("3") }, 3000)
    // setTimeout(() => { observer.error(new Error('Something went wrong! Please try again later')) }, 3000)
    setTimeout(() => { observer.next("4") }, 4000)
    setTimeout(() => { observer.next("5") }, 5000)
    setTimeout(() => { observer.complete() }, 3000)
    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")
  });

  ngOnInit() {
    this.myObservable.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message);
    }, () => {
      alert('Observable has complete emitting all values.')
    });
  }
}