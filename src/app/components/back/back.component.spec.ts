import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BACKComponent } from './back.component';

describe('BACKComponent', () => {
  let component: BACKComponent;
  let fixture: ComponentFixture<BACKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BACKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
