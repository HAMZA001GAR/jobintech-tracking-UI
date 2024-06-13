import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './ExpertDashboards/formations/formations.component';
import { StepsComponent } from './ExpertDashboards/steps/steps.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ProgressCardComponent } from './ExpertDashboards/steps-card/progress-card.component';
import { HeaderComponent } from './layouts/header/header.component';
import { TaskBoardComponent } from './ExpertDashboards/task-board/task-board.component';
import { TaskCardComponent } from './ExpertDashboards/task-card/task-card.component';
import { EditStepComponent } from './ExpertDashboards/edit-step/edit-step.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    StepsComponent,
    SidebarComponent,
    ProgressCardComponent,
    HeaderComponent,
    TaskBoardComponent,
    TaskCardComponent,
    EditStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
