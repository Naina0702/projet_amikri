import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HifandrayComponent } from './hifandray.component';

describe('HifandrayComponent', () => {
  let component: HifandrayComponent;
  let fixture: ComponentFixture<HifandrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HifandrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HifandrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
