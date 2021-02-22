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
  amtOfControl = 'no';


  promptIndex = 0;
  promptSections = [
    {prompt: 'How do you feel?',
    options: ['Peaceful', 'Scared']},
    {prompt: 'You hear a noise.',
    options: ['Okay', 'What is it?']},
    {prompt: 'It sounds like the deep growl of a large animal.',
    options: [`I'm scared.`, `It's just a dream.`,`I am not in control.`]},
    {prompt: 'Are you determined to try to gain control?',
    options: ['Yes', 'No']}

  ]
  prompt;
  options = [];
  doneSelecting;
  responses = [];

  gainSomeControlPrompt = 'You gain some control.';

  ngOnInit(){
    
  }

  begin(){
    this.line = 0;
    setTimeout(() => this.startScreen = false, 1800);
    setTimeout(() => this.line = 1, 2500);
    setTimeout(() => this.line = 2, 6500);
    setTimeout(() => {
      this.prompt = this.promptSections[this.promptIndex].prompt;
      this.options = this.promptSections[this.promptIndex].options;
    }, 10500);
  }

  selected(option){
    this.doneSelecting = true;
    if(this.prompt === 'Are you determined to try to gain control?'){
      if(option === 'Yes'){
        this.promptSections.push({
          prompt: this.gainSomeControlPrompt,
          options: ['Yes!']
        });
        this.promptSections.push({
          prompt: 'What do you do?',
          options: ['Run away from the noise', 'Run towards the noise']
        });
      } else {
        this.prompt = 'You are devoured.  There was nothing you could do.';
        option = '';
        this.options = [];
        this.promptSections.push({
          prompt: 'THE END',
          options: []
        })
      }
    } else if (this.prompt === 'What do you do?'){
      if(option === 'Run towards the noise'){
        this.prompt = 'You are devoured by a massive and ferocious beast.';
        option = '';
        this.options = [];
        this.promptSections.push({
          prompt: 'THE END',
          options: []
        });
      } else {
        this.promptSections.push({
          prompt: 'You have escaped... For now...',
          options: ['Hooray!']
        });
      }
        
    }

    setTimeout(() => {
      this.responses.push(this.prompt + ' ' + option);
      this.prompt = null;
      this.options = [];
      this.doneSelecting = false;
      this.promptIndex++;
    }, 1400);
    setTimeout(() => {
      if(this.promptIndex < this.promptSections.length){
        this.prompt = this.promptSections[this.promptIndex].prompt;
        this.options = this.promptSections[this.promptIndex].options;
      }
      if(this.prompt === this.gainSomeControlPrompt){
        this.amtOfControl = 'some';
      }
    }, 1900);

  }
}
