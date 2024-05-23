import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [SidenavComponent,RouterOutlet],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
