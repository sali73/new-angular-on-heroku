import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FEATRESComponent } from './featres.component';

describe('FEATRESComponent', () => {
  let component: FEATRESComponent;
  let fixture: ComponentFixture<FEATRESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FEATRESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FEATRESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
