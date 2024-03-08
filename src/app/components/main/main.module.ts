import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';  
import { SharedModule } from 'src/app/shared/shared.module'; 
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ClientsActivityComponent } from './dashboard/clients-activity/clients-activity.component';
import { ProjectStatusComponent } from './dashboard/project-status/project-status.component';
import { RecentProjectsComponent } from './dashboard/recent-projects/recent-projects.component';
import { TotalProjectComponent } from './dashboard/total-project/total-project.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommanWidgetsChartComponent } from './dashboard/recent-projects/comman-widgets-chart/comman-widgets-chart.component';
import { ProjectsOverviewComponent } from './dashboard/projects-overview/projects-overview.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { TodaysTasksComponent } from './dashboard/todays-tasks/todays-tasks.component';
import { RunningEventsComponent } from './dashboard/running-events/running-events.component';
import { OnlineCourseTimelineComponent } from './dashboard/online-course-timeline/online-course-timeline.component';
import { CalendarDashboardComponent } from './dashboard/calendar-dashboard/calendar-dashboard.component';
import { ProjectModule } from './project/project.module';
import { ChatModule } from './chat/chat.module';
import { FaqComponent } from './faq/faq.component';
import { FaqModule } from './faq/faq.module';
import { UserCardsComponent } from './user/user-cards/user-cards.component';


@NgModule({
  declarations: [   
    DashboardComponent,
    ClientsActivityComponent, 
    ProjectStatusComponent, 
    RecentProjectsComponent,
    TotalProjectComponent,
    CommanWidgetsChartComponent,
    ProjectsOverviewComponent,
    UserProfileComponent,
    TodaysTasksComponent,
    RunningEventsComponent,
    OnlineCourseTimelineComponent,
    CalendarDashboardComponent
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule, 
    NgbDatepickerModule,
    JsonPipe,
    SharedModule,
    NgApexchartsModule,
    ProjectModule,
    ChatModule,
    FaqModule,
  ]
})
export class MainModule { }
