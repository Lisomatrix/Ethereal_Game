import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShopComponent } from './item-shop.component';

describe('ItemShopComponent', () => {
  let component: ItemShopComponent;
  let fixture: ComponentFixture<ItemShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
