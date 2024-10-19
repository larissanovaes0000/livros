import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncluirComponent } from './modal-incluir.component';

describe('ModalIncluirComponent', () => {
  let component: ModalIncluirComponent;
  let fixture: ComponentFixture<ModalIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalIncluirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
