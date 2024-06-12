import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { StepsComponent } from './steps/steps.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';

const routes: Routes = [
  { path: 'formations', component: FormationsComponent },
  { path: 'steps/:formationId', component: StepsComponent },
  { path: 'parcours', component: ProgressCardComponent },
  { path: '', redirectTo: '/formations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
