import { ComponentFixture, TestBed } from '@angular/core/testing';
import AnalyticsObjectComponent from './analytics-object.component';



describe('AnalyticsObjectComponent', () => {
  let component: AnalyticsObjectComponent;
  let fixture: ComponentFixture<AnalyticsObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
