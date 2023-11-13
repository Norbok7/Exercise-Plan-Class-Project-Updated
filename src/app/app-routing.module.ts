import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { TallysComponent } from './sidebar/tallys/tallys.component';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ExerciseListEditComponent } from './exercise-list/exercise-list-edit/exercise-list-edit.component';
import { AuthService } from './Auth/auth.component';


const routes: Routes = [
  // { path: 'log-in', component: LogInInformationComponent },
  { path: '', component: LandingPageComponent },
  { path: 'workouts-completed', component: TallysComponent},
  { path: 'auth', component: AuthService},
  { path: 'exercise-list', component: ExerciseListComponent,
   children: [{path: ':exercise', component: ExerciseListComponent},
   {path: ':edit', component: ExerciseListEditComponent},
  ]},
  { path: 'exercise-difficulty',component: DifficultyLevelComponent,
   children: [{path: ':difficulty', component: DifficultyLevelComponent},
              ]


  }


];
// {
//   path: 'items',
//   loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
// }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
