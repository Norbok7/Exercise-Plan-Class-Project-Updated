import { Component, OnInit, Input} from '@angular/core';
import { Exercise } from 'src/main';
import { TallysService } from './tallys/tally.service';
import { DifficultyLevelComponent } from '../difficulty-level/difficulty-level.component';
import { DataStorageService } from '../Shared/data-storage.service';
import { LogInInformationComponent } from './log-in-information/log-in-information.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent{
  @Input() exercise: Exercise;
  myExercises: Exercise[] = [];
  myTallys: TallysService
 x=0;
 y=0;
 z=0;
 zz=0;


constructor(private tallysService: TallysService, private difficulty: DifficultyLevelComponent, private dataStorageService: DataStorageService, private login: LogInInformationComponent) {

}
ngOnInit() {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1200) {
      // Hide the sidebar
      document.getElementById('wrapper').style.display = 'none';
    } else {
      // Show the sidebar
      document.getElementById('wrapper').style.display = 'block';
    }
  });
}
showForm(){
  this.login.showFormNow();
}
onSaveData(){
this.dataStorageService.storeExercises();
}
onFetchData(){
  this.dataStorageService.fetchExercises();
}


  begWoComplete( ){
    // parent.addEventListener('click', this.begWoComplete);
    this.tallysService.workoutCompleteB();
    this.x++;
    this.zz++;
  }
  itermWoComplete(){
    // parent.addEventListener('click', this.itermWoComplete);
    this.tallysService.workoutCompleteI();
    this.y++;
    this.zz++;
  }
  advWoComplete(){
    // parent.addEventListener('click', this.advWoComplete);
    this.tallysService.workoutCompleteA();
    this.z++;
    this.zz++;
  }
exList(){
  // this.difficulty.lowerExercises.splice(0, this.difficulty.lowerExercises.length); // This will all the last element from the array.
  // this.difficulty.coreExercises.splice(0, this.difficulty.coreExercises.length);
  // this.difficulty.upperExercises.splice(0, this.difficulty.upperExercises.length);
return this.myExercises
}
woCompleted(){

  //when you come back make this be looped over in order to display for more info look at your ex list loop

}
}
