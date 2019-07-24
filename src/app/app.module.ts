import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { ShopButtonComponent } from './shop-button/shop-button.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { ItemShopComponent } from './item-shop/item-shop.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { UpgradeShopComponent } from './upgrade-shop/upgrade-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HealthBarComponent,
    ShopButtonComponent,
    UserCardComponent,
    ShopPageComponent,
    LoginComponent,
    GameComponent,
    ItemShopComponent,
    ResetButtonComponent,
    UpgradeShopComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
