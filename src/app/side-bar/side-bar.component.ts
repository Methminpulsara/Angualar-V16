import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

    @Input() public name = 'Home';


    //meyata uda inn okkoma perenlata event ek ywnw
    @Output() public childEvent:EventEmitter<string> = new EventEmitter<string>();


    public onClick(){
      this.childEvent?.emit(this.name);
    }

}
