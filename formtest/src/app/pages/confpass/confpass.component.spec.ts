import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfpassComponent } from './confpass.component';

describe('ConfpassComponent', () => {
  let component: ConfpassComponent;
  let fixture: ComponentFixture<ConfpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
