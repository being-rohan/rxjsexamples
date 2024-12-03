import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WethereportComponent } from './wethereport.component';

describe('WethereportComponent', () => {
  let component: WethereportComponent;
  let fixture: ComponentFixture<WethereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WethereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WethereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
