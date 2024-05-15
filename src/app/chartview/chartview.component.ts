import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  contentChild,
  effect,
  inject,
} from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { ChildcompComponent } from '../childcomp/childcomp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chartview',
  standalone: true,
  imports: [ChildcompComponent,CommonModule],
  templateUrl: './chartview.component.html',
  styleUrl: './chartview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChartviewComponent implements OnInit {
  constructor() {
   
  }
  sharedService = inject(SharedserviceService);
  private cdf = inject(ChangeDetectorRef);
 

  ngOnInit(): void {}
 
  callApi() {
    this.sharedService.getChartDetails();
  }

  computedApi() {
    this.sharedService.getPosts();
  }
}
