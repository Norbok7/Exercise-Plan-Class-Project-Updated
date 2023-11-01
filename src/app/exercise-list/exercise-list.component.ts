import { Component, ViewChild} from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { BodyPart, Exercise } from '../Shared/exercisemodel';
import { ExerciseService } from './exercise.service';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

  export class ExerciseListComponent implements OnInit {
    @Input() exercise: Exercise;
    myExercises: Exercise[] = [];
    searchTerm: string;
    filteredExercises: Exercise[];
    constructor(private exerciseService: ExerciseService) {}

      ngOnInit(): void {
        //use the service to set local 'myexercises' array to service/global 'myExercise' array
      this.myExercises = this.exerciseService.getExercises();
      //list for change on the global 'myExercises' array and update the local version
      this.exerciseService.exerciseListChange.subscribe((exercises: Exercise[]) => {
        this.myExercises = exercises;

      })

      }
      getSets(value: number) {
        return value;
      }
      // runServiceDelete(exercise){
      //   this.exerciseService.deleteItem(exercise)
      //   console.log(exercise)
      // }
      runServiceEdit(index: number){
        
        this.exerciseService.startedEditing.next(index);

      }

      onReps(form: NgForm) {
        // TODO: Submit the form data to the server
        //get form data
        const value = form.value;
        return console.log(value);

    }
    onSearch(searchTerm: string) {
      this.searchTerm = searchTerm;
      this.filteredExercises = this.exerciseService.getExercises().filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

  }















