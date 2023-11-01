import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from '../exercisemodel';

@Pipe({
  name: 'sortExercises'
})
export class SortExercisesPipe implements PipeTransform {

  transform(exercise: Exercise[], field:string): unknown {
    exercise.sort((a: Exercise, b: Exercise) => {
      if (a [field] < b[field]) {
        return -1;
       } else {
        return 1
       }
    })
    return exercise;
  }

}
