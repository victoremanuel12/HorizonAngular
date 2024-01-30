import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VooCardComponent } from './voo-card.component';

describe('VooCardComponent', () => {
  let component: VooCardComponent;
  let fixture: ComponentFixture<VooCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VooCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VooCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
