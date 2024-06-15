import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './ExpertDashboards/formations/formations.component';
import { StepsComponent } from './ExpertDashboards/steps/steps.component';
import { ProgressCardComponent } from './ExpertDashboards/steps-card/progress-card.component';
import { TaskBoardComponent } from './ExpertDashboards/task-board/task-board.component';
import { AddCategoryComponent } from './ExpertDashboards/add-category/add-category.component';
import { EditStepComponent } from './ExpertDashboards/edit-step/edit-step.component';
import { AddStepComponent } from './ExpertDashboards/add-step/add-step.component';
import { ParcoursProgressComponent } from './StudentDashboards/parcours-progress/parcours-progress.component';

const routes: Routes = [
  { path: 'formations', component: FormationsComponent },
  { path: 'steps/:formationId', component: StepsComponent },

  { path: 'steps', component: ProgressCardComponent },
  { path: 'task', component: TaskBoardComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-step', component: EditStepComponent },
  { path: 'add-step', component: AddStepComponent },
  { path: 'parcours-progress', component: ParcoursProgressComponent },
  { path: '', redirectTo: '/parcours-progress', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
