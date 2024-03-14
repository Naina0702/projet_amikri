import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenu2Component } from './contenu-2.component';

describe('Contenu2Component', () => {
  let component: Contenu2Component;
  let fixture: ComponentFixture<Contenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contenu2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Contenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
