import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopButtonComponent } from './shop-button.component';

describe('ShopButtonComponent', () => {
  let component: ShopButtonComponent;
  let fixture: ComponentFixture<ShopButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
