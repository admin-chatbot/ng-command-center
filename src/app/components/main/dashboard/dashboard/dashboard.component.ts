import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';
 

@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public websiteDesign = data.websiteDesign
  public socialPostDesign = data.socialPostDesign;
  public podcastWebDesign = data.podcastWebDesign;
  public cryptoDashboard = data.cryptoDashboard;
}
