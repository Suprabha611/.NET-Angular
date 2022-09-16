import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConchildComponent } from './conchild.component';

describe('ConchildComponent', () => {
  let component: ConchildComponent;
  let fixture: ComponentFixture<ConchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
