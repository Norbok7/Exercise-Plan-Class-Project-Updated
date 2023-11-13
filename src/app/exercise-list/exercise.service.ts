import { Injectable, OnInit } from '@angular/core';
import { BodyPart, Exercise } from '../Shared/exercisemodel';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ExerciseListEditComponent } from './exercise-list-edit/exercise-list-edit.component';
import { DataStorageService } from 'src/app/Shared/data-storage.service';
@Injectable({
  providedIn: 'root',
})
export class ExerciseService implements OnInit {
  startedEditing = new Subject<number>();
  exerciseSelected = new Subject<Exercise>();
  exerciseListChange = new Subject<Exercise[]>();
  public myExercises: Exercise[] = []
  //   new Exercise(
  //     BodyPart.core,
  //     'Sit Up',
  //     'A sit-up is an exercise that involves lying flat on your back, lifting your torso to a sitting position, and then lying flat again. You should do this without changing the position of your legs.',
  //     'https://static.strengthlevel.com/images/illustrations/sit-ups-1000x1000.jpg', 1
  //   ),
  //   new Exercise(
  //     BodyPart.core,
  //     'Oblique Twist',
  //     'Contract your abs and sit at about a 45-degree angle. Hold the medicine ball with both hands, directly in front of you. Contracting your abs, twist slowly from your torso to your right and touch the medicine ball to the floor beside you. Pause to hold the position a moment.',
  //     'https://static.strengthlevel.com/images/illustrations/russian-twist-1000x1000.jpg', 2
  //   ),
  //   new Exercise(
  //     BodyPart.core,
  //     'Flutter Kick',
  //     "What are Flutter Kicks? A Flutter Kick is an exercise that specifically targets the lower abdominal wall. You perform this move by lying on your back and using your core to “flutter” your legs up and down. You'll often see this type of move performed in Pilates, barre and strength training classes.",
  //     'https://static.strengthlevel.com/images/illustrations/flutter-kicks-1000x1000.jpg', 3
  //   ),
  //   new Exercise(
  //     BodyPart.lower,
  //     'Squat',
  //     'To do a squat, stand with your feet slightly greater than shoulder-width apart and your toes pointing ahead. Slowly descend, bending through the hips, knees and ankles. Stop when your knees reach a 90-degree angle.',
  //     'https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg', 4
  //   ),
  //   new Exercise(
  //     BodyPart.lower,
  //     'Hamstring Curl',
  //     'The hamstring curl, also called a leg curl, is an exercise that strengthens the hamstrings. It involves bending your knees and moving your heels toward your butt while the rest of your body stays still. Typically, the exercise is done on a leg curl machine.',
  //     'https://static.strengthlevel.com/images/illustrations/lying-leg-curl-1000x1000.jpg', 5
  //   ),
  //   new Exercise(
  //     BodyPart.lower,
  //     'Hip Thrust',
  //     'Perform a hip thrust by squeezing the glutes and pressing the dumbbell straight up until the hips align with the shoulders and knees. Squeeze at the top before lowering down to repeat.',
  //     'https://static.strengthlevel.com/images/illustrations/hip-thrust-1000x1000.jpg', 6
  //   ),
  //   new Exercise(
  //     BodyPart.lower,
  //     'Calf Raise',
  //     "Exercises don't come much simpler than the calf raise. Stand up straight, then push through the balls of your feet and raise your heel until you are standing on your toes. Then lower slowly back to the start.",
  //     'https://static.strengthlevel.com/images/illustrations/machine-calf-raise-1000x1000.jpg', 7
  //   ),
  //   new Exercise(
  //     BodyPart.upper,
  //     'Lat Pull Down',
  //     'A lat pulldown is a compound exercise that targets your back muscles. Perform the lat pulldown exercise by sitting in front of a cable machine with a pulldown bar. Grab the bar and bend your elbows to lower it closer towards your upper chest.',
  //     'https://static.strengthlevel.com/images/illustrations/close-grip-lat-pulldown-1000x1000.jpg', 8
  //   ),
  //   new Exercise(
  //     BodyPart.upper,
  //     'Low row',
  //     'The correct form for the low row exercise is to stand with your feet hip-width apart, knees slightly bent, and your back straight. Hold a dumbbell in each hand with your palms facing inwards. Pull the dumbbells up towards your chest, keeping your elbows close to your body.',
  //     'https://static.strengthlevel.com/images/illustrations/seated-cable-row-1000x1000.jpg', 9
  //   ),
  //   new Exercise(
  //     BodyPart.upper,
  //     'Back Extension',
  //     'A back extension exercise involves lifting your upper body to form a straight line, and then lowering yourself back down to the starting position. You can perform this exercise on the floor or on a bench.',
  //     'https://static.strengthlevel.com/images/illustrations/back-extension-1000x1000.jpg', 10
  //   ),
  //   new Exercise(
  //     BodyPart.upper,
  //     'Bench Press',
  //     'Back Exercise, lead with elbows until they can not go down any further. Keep good posture!',
  //     'https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg', 11
  //   ),
  //   new Exercise(
  //     BodyPart.upper,
  //     'Shoulder Press',
  //     'The overhead press, also known as the shoulder press or military press, is an upper-body weight training exercise in which the trainee presses a weight overhead while seated or standing. It is mainly used to develop the anterior deltoid muscles of the shoulder.',
  //     'https://static.strengthlevel.com/images/illustrations/seated-dumbbell-shoulder-press-1000x1000.jpg', 12
  //   ),
  // ];


  constructor() {}
  // figure how to solve this question to refactor 3 components out
  //calls core,lower,upper exercises from exercise service onto our difficulty level component button



  ngOnInit(): any {

  }
  setExercises(myExercises: Exercise[]){
    this.myExercises = myExercises;
    this.exerciseListChange.next(this.myExercises.slice());
  }
  //read
  getExercises() {


    return this.myExercises
  }
  getExercise(index: number){
    return this.myExercises[index];
  }
  updateExercise(index: number, newExercise: Exercise){
    this.myExercises[index] = newExercise;
    this.exerciseListChange.next(this.myExercises.slice())
  }
  //create
  addExercise(exercise: Exercise) {
    this.myExercises.push(exercise);
    this.exerciseListChange.next(this.myExercises.slice());
    console.log(this.myExercises);
  }
  //delete
  //get help fixing this button fixed//
  deleteItem(index: number) {
    this.myExercises.splice(index, 1);
    this.exerciseListChange.next(this.myExercises.slice());
      alert(
        'Your exercise has been succesfully removed from Exercise List!!!!'
      );
    }

  }
  //edit


