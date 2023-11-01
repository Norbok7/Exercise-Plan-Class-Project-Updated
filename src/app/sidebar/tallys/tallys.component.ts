import { Injectable, Component, OnInit, EventEmitter } from '@angular/core';
import { TallysService } from './tally.service';
import { Tallys } from 'src/app/Shared/tallysmodel';

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-tallys',
  templateUrl: './tallys.component.html',
  styleUrls: ['./tallys.component.css']
})
export class TallysComponent implements OnInit{

  progressValue = 0;

  public myTallys: Tallys [] = [


  ];
  // tallysSelected = new EventEmitter<Tallys>(); //*******<----how components are able to talk */
  // tallysListChange = new EventEmitter<Tallys[]>();
// private x$: BehaviorSubject<number>=new BehaviorSubject<number>(0);
// public x: number = this.x$.value
constructor(private tallysService: TallysService) {}

// data = this.tallysService.getTally();

    ngOnInit(): void {
    this.myTallys = this.tallysService.getTally();

    setInterval(() => {
        this.progressValue += 1;
        if (this.progressValue === 100) {
          this.progressValue = 0;
        }
      }, 1000);
    }
    }










// updateX(x: number):void{
// this.x$.next(x);
// console.log(x);
// }





