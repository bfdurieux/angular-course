import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  activeTab: string = 'home';

  setActiveTab(tabName: string){
    this.activeTab = tabName;
  }
}
