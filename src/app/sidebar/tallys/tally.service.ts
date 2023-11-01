import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tallys } from 'src/app/Shared/tallysmodel';

@Injectable({
  providedIn: "root"
})

export class TallysService {
  public x: any = 0;
  public y: any = 0;
  public z: any = 0;
  public zz: any = 0;
  private myTally: Tallys [] = [
this.x,this.y,this.z,this.zz
  ]
  tallySelected = new EventEmitter<Tallys>();
  tallysListChange = new EventEmitter<Tallys[]>();



// workoutsTally: number[] = [this.x,this.y,this.z,this.zz];
// getX():Observable<number>{
// return new Observable<number>(subscriber=>{
//   subscriber.next(this.x);
// })


getTally(){
  let x = 0;
  let zz = 0;
  let y = 0;
  let z = 0;
  console.log(this.myTally);
  return this.myTally;
  }
  workoutCompleteB(){


    this.x++;
    this.zz++;
    this.myTally.splice(0,1,this.x);
    this.myTally.splice(3,1,this.zz);

  }
  workoutCompleteI(){

    this.y++;
    this.zz++;
    this.myTally.splice(1,1,this.y);
    this.myTally.splice(3,1,this.zz);
  }
  workoutCompleteA(){
    this.z++;
    this.zz++;
    this.myTally.splice(2,1,this.z);
    this.myTally.splice(3,1,this.zz);
  }
}

