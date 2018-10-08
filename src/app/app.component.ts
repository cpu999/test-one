import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  handleClick() {
    //execute action
    console.log("Clicked the button");
  }
  title = 'test-one';
}
