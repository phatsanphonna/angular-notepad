import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSize = { 'font-size': 'medium' }

  setTextSize(size: string) {
    this.fontSize['font-size'] = size
  }
}
