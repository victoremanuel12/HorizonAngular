import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVooComponent } from './detalhes-voo.component';

describe('DetalhesVooComponent', () => {
  let component: DetalhesVooComponent;
  let fixture: ComponentFixture<DetalhesVooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesVooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
