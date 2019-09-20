import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPetComponent } from './ind-pet.component';

describe('IndPetComponent', () => {
  let component: IndPetComponent;
  let fixture: ComponentFixture<IndPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
