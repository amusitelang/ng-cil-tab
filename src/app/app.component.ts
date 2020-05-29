import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cil-tab';
  color: 'red';
  baseUrl: ['https://www.baidu.com', 'https://www.baidu.com', 'https://www.baidu.com', 'https://www.baidu.com', 'https://www.baidu.com']
}
