import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartValidationComponent } from './cart-validation.component';

describe('CartValidationComponent', () => {
  let component: CartValidationComponent;
  let fixture: ComponentFixture<CartValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
