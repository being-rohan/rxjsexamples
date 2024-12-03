import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdhotobsrvblesComponent } from './coldhotobsrvbles.component';

describe('ColdhotobsrvblesComponent', () => {
  let component: ColdhotobsrvblesComponent;
  let fixture: ComponentFixture<ColdhotobsrvblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdhotobsrvblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdhotobsrvblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
