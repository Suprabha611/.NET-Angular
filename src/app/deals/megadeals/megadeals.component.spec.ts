import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegadealsComponent } from './megadeals.component';

describe('MegadealsComponent', () => {
  let component: MegadealsComponent;
  let fixture: ComponentFixture<MegadealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegadealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegadealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
