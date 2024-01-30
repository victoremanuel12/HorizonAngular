import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionPassageiroComponent } from './acordion-passageiro.component';

describe('AcordionPassageiroComponent', () => {
  let component: AcordionPassageiroComponent;
  let fixture: ComponentFixture<AcordionPassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordionPassageiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordionPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
