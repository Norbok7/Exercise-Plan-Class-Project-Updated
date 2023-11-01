import { Component, OnInit, VERSION } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ExerciseService } from "../exercise-list/exercise.service";
import { BodyPart, Exercise } from "../Shared/exercisemodel";
import { ExerciseListComponent } from "../exercise-list/exercise-list.component";
@Component({
  selector: 'app-difficulty-level',
  templateUrl: './difficulty-level.component.html',
  styleUrls: ['./difficulty-level.component.css'],
})
export class DifficultyLevelComponent implements OnInit {
  coreExercises: Exercise[];
  lowerExercises: Exercise[];
  upperExercises: Exercise[];

  constructor(private exerciseService: ExerciseService, private exList: ExerciseListComponent,
    // private router: Router, //used to route inside of typescript
    private route: ActivatedRoute, //<--what were using to access current route
    ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const diffLvl = +params['difficulty'];
    })
  }


  core() {
    this.coreExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.core
    );
    this.lowerExercises = [];
    this.upperExercises = [];
    this.lowerExercises.splice(0, this.lowerExercises.length); // This will all the last element from the array.
    this.upperExercises.splice(0, this.upperExercises.length);
  }




  lower() {
    this.lowerExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.lower
    );
    this.upperExercises = [];
    this.coreExercises = [];
    this.upperExercises.splice(0, this.upperExercises.length); // This will all the last element from the array.
    this.coreExercises.splice(0, this.coreExercises.length);
  }


  upper() {
    this.upperExercises = this.exerciseService.myExercises.filter(
      (exercises) => exercises.bodypart === BodyPart.upper
    );
    this.lowerExercises = [];
    this.coreExercises = [];
    this.lowerExercises.splice(0, this.lowerExercises.length); // This will all the last element from the array.
    this.coreExercises.splice(0, this.coreExercises.length);
  }

  beginner(){
    document.getElementById('advanced').style.display='none'
    document.getElementById('intermediate').style.display='none'
    document.getElementById('beginner').style.display='block'

  }
  intermediate(){
    document.getElementById('advanced').style.display='none'
    document.getElementById('intermediate').style.display='block'
    document.getElementById('beginner').style.display='none'
  }
  advanced(){
    document.getElementById('advanced').style.display='block'
    document.getElementById('intermediate').style.display='none'
    document.getElementById('beginner').style.display='none'
  }

  }


