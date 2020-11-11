import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('toggleClick', [     // trigger block
      state('0', style({      // final CSS following animation
        color: '#f7fafc',
      })),
      state('1', style({
        color: '#f56565'
      })),
      state('2', style({
        color: '#56F873'
      })),
      state('3', style({
        color: '#7356F8'
      })),
      transition('0 => 1', animate(`2000ms linear`)),
      transition('1 => 2', animate(`2000ms linear`)),
      transition('2 => 3', animate(`2000ms linear`)),
      transition('3 => 0', animate(`2000ms linear`)),
    ])
  ]
})
export class MainComponent implements AfterViewInit{
  state: number = 0;
  showMenu: boolean = false;

  ngAfterViewInit(){
    setInterval(()=>{
      this.toggleIsCorrect();
    },3000)

  }

  toggleIsCorrect() {
    if(this.state < 3){
    this.state ++;
    return
    }
    this.state = 0;

  }

  toogleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
  }

}
