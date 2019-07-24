import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeShopComponent } from './upgrade-shop.component';

describe('UpgradeShopComponent', () => {
  let component: UpgradeShopComponent;
  let fixture: ComponentFixture<UpgradeShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
