import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics-object',
  standalone: true,
  imports: [],
  templateUrl: './analytics-object.component.html',
  styleUrl: './analytics-object.component.scss'
})
export default class AnalyticsObjectComponent implements OnInit {
public router = inject(Router)
public http = inject(HttpClient)

ngOnInit(): void {
  this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res)=>{
    console.log(res)
  },)
}
}
