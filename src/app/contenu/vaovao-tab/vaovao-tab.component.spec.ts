import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaovaoTabComponent } from './vaovao-tab.component';

describe('VaovaoTabComponent', () => {
  let component: VaovaoTabComponent;
  let fixture: ComponentFixture<VaovaoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaovaoTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaovaoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
