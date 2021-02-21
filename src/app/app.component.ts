import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'story-game';
  line = 1;

  ngOnInit(){
    setTimeout(() => this.line++, 4000);
  }
}
