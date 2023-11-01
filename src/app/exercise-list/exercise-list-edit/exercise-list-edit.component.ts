import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Exercise } from 'src/app/Shared/exercisemodel';
import { ExerciseService } from '../exercise.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExerciseListComponent } from '../exercise-list.component';
@Component({
  selector: 'app-exercise-list-edit',
  templateUrl: './exercise-list-edit.component.html',
  styleUrls: ['./exercise-list-edit.component.css']
})
export class ExerciseListEditComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Exercise
  bodyparts = ['Upper Body Exercise', 'Lower Body Exercise', 'Core Exercises' ]
  selectedBodyPart = 'Upper Body Exercise'
  @ViewChild ('f') elForm: NgForm;
  constructor(private exerciseService: ExerciseService, private exerciseList: ExerciseListComponent) { }


  ngOnInit() {
    this.subscription = this.exerciseService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.exerciseService.getExercise(index);
        this.elForm.setValue({
          bodypart: this.editedItem.bodypart,
          name: this.editedItem.name,
          description: this.editedItem.description,
          imagePath: this.editedItem.imagePath
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    // TODO: Submit the form data to the server
    //get form data
    const value = form.value;
    const newExercise = new Exercise(value.bodypart, value.name, value.description, value.imagePath);
    if (this.editMode){
      this.exerciseService.updateExercise(this.editedItemIndex, newExercise)
    } else { this.exerciseService.addExercise(newExercise);
  }
  this.editMode = false;
  form.reset();
    //reset form
    };
    onClear(){
      this.elForm.reset();
      this.editMode = false;
    }
    onDelete(){
      this.exerciseService.deleteItem(this.editedItemIndex);
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

  }




