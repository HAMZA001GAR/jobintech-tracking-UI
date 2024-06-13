import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './ExpertDashboards/formations/formations.component';
import { StepsComponent } from './ExpertDashboards/steps/steps.component';
import { ProgressCardComponent } from './ExpertDashboards/progress-card/progress-card.component';
import { TaskBoardComponent } from './ExpertDashboards/task-board/task-board.component';
import { AddCategoryComponent } from './ExpertDashboards/add-category/add-category.component';

const routes: Routes = [
  { path: 'formations', component: FormationsComponent },
  { path: 'steps/:formationId', component: StepsComponent },
  { path: 'parcours', component: ProgressCardComponent },
  { path: 'steps', component: TaskBoardComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: '', redirectTo: '/parcours', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
