import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'story-game';
  startScreen = true;
  line = -1;

  ngOnInit(){
    
  }

  begin(){
    this.line = 0;
    setTimeout(() => this.startScreen = false, 1800);
    setTimeout(() => this.line = 1, 2500);
    setTimeout(() => this.line = 2, 6500);
  }
}
