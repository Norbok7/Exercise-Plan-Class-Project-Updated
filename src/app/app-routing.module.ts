import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInInformationComponent } from './sidebar/log-in-information/log-in-information.component';
import { ExerciseListEditComponent } from './exercise-list/exercise-list-edit/exercise-list-edit.component';


const routes: Routes = [
  { path: 'log-in', component: LogInInformationComponent },
  { path: '', component: LandingPageComponent },
  { path: 'workouts-completed', component: TallysComponent},
  { path: 'exercise-list', component: ExerciseListComponent,
   children: [{path: ':exercise', component: ExerciseListComponent},
  //  {path: ':new',  component: ExerciseListEditComponent},
   {path: ':edit', component: ExerciseListEditComponent},
  ]},
  { path: 'exercise-difficulty',component: DifficultyLevelComponent,
   children: [{path: ':difficulty', component: DifficultyLevelComponent},
              ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
