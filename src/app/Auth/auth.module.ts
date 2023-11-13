import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

import { RouterModule } from '@angular/router';
import { authGuard } from './auth.guard';

@NgModule({
  declarations: [
    // Compoenents
    AuthComponent,
    // Directives
    // Pipes
  ],
  imports: [
   
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
  ],
})
export class AuthModule {}
