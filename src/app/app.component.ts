import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  //Interpolation
  appName = ' This is a One-way Data binding';

  //Property Binding
  clientName: string = 'Carl';

  //STYLE BINDING, CSS BINDING
  appliedWDClass = 'green';
  notappliedWDClass = true;
  myColor = 'red';

  // for two-wy data binding demo
  myName = '';

  // Event Binding
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
