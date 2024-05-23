import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  public router = inject(Router)
  selectedMenu:any
sidenavdata:any = [{
  id : 1,
  menu:'Model',
  child: [
    {
      id : 1.1,
      menu: 'Analytics Object',
      routeUrl: '/analytics_object'
    },
    {
      id : 1.2,
      menu: 'Metrics',
      routeUrl: '/metrics'
    }
  ]
}]
ngOnInit(): void {
  
}
navigateMenu(url:string,menu:string){
  this.selectedMenu = menu
this.router.navigate([url])
}

}
