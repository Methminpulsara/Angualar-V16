import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  public childerenName:string = "Child Name";

  onClick(name:string){
    this.childerenName=name;
  }




}
