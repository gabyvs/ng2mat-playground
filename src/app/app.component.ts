import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'My App';
  public model: string = '';

  public get color (): string {
    return this.model ? 'primary' : 'warn';
  }

}
