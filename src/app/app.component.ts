import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appName = 'POKNAT';
  clientName: string = 'Andrew';
  appliedWDClass = 'red';
  notappliedWDClass = 'false';
  myColor = 'violet';
}
