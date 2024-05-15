import { Component } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  standalone: true,
  imports: [],
  templateUrl: './childcomp.component.html',
  styleUrl: './childcomp.component.scss'
})
export class ChildcompComponent {
message :any = 'Hello Angular'
messageData :any = 'Hello Angular 2'
changeData(param:any){
  console.log(param)
  this.messageData = 'Hello'
}
}
