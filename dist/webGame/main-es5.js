(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-sidebar></app-sidebar>\n<app-health-bar></app-health-bar>\n<app-user-card></app-user-card>\n<app-shop-page></app-shop-page> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/game.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<app-health-bar></app-health-bar>\n<app-user-card></app-user-card>\n<app-shop-page></app-shop-page>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/health-bar/health-bar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/health-bar/health-bar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"health-bar-container\">\n    <div class=\"fill-bar\">\n\n    </div>\n    <div class=\"empty-bar\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-container\">\n    <div class=\"login-page\">\n        <a\n          href=\"http://localhost:3000/login\"\n        >\n          Login through Discord\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shop-button/shop-button.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shop-button/shop-button.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shop-btn-container\">\n    <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-bd94102f574d63fdd09ec3eaf9b6a285-buy.png\" >\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shop-page/shop-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shop-page/shop-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{ shopOpen ?  'shop-page-container' : 'shop-page-container closed' }}\">\n\n</div>\n<app-shop-button (click)=\"shopClicked()\" ></app-shop-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-container\">\n    <div class=\"title-container\">\n        <h1 class=\"title\">Ethereal Clickbait</h1>\n    </div>\n\n    <div class=\"level-container\">\n        level 1\n        <progress></progress>\n    </div>\n\n    <div class=\"ores-container\">\n        <ul>\n            <li>900 Diamond</li>\n        </ul>\n    </div>\n\n    <div class=\"stats-container\">\n        <ul>\n            <li>100 Damage</li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-card/user-card.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-card/user-card.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-card-container container\">\n  <div class=\"user-container\">\n    <div class=\"img-container\">\n      <!-- <img src=\"https://cdn.discordapp.com/avatars/313010829790412800/57e7c5d16250f158d483b4c1869844b7.jpg\"> -->\n      <img src=\"{{ avatar }}\">\n    </div>\n    <div class=\"name-container\">\n      <span>Lisomatrix</span>\n    </div>\n  </div>\n  <div class=\"dropdown-container\">\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");





var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: 'callback', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _health_bar_health_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./health-bar/health-bar.component */ "./src/app/health-bar/health-bar.component.ts");
/* harmony import */ var _shop_button_shop_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop-button/shop-button.component */ "./src/app/shop-button/shop-button.component.ts");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-card/user-card.component */ "./src/app/user-card/user-card.component.ts");
/* harmony import */ var _shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shop-page/shop-page.component */ "./src/app/shop-page/shop-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _health_bar_health_bar_component__WEBPACK_IMPORTED_MODULE_7__["HealthBarComponent"],
                _shop_button_shop_button_component__WEBPACK_IMPORTED_MODULE_8__["ShopButtonComponent"],
                _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_9__["UserCardComponent"],
                _shop_page_shop_page_component__WEBPACK_IMPORTED_MODULE_10__["ShopPageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/discord-oauth2.service.ts":
/*!*******************************************!*\
  !*** ./src/app/discord-oauth2.service.ts ***!
  \*******************************************/
/*! exports provided: DiscordOAuth2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordOAuth2Service", function() { return DiscordOAuth2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DiscordOAuth2Service = /** @class */ (function () {
    function DiscordOAuth2Service(http) {
        this.http = http;
    }
    DiscordOAuth2Service.prototype.getUserInfo = function () {
        var _this = this;
        return this.http.get('http://discordapp.com/api/users/@me', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('discord-token')
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (info, index) {
            _this.userInfo = info;
            return info;
        }));
    };
    DiscordOAuth2Service.prototype.getUserAvatar = function () {
        // return `https://cdn.discordapp.com/avatars/${this.userInfo.id}/${this.userInfo.avatar}.png`;
        return this.http.get('http://discordapp.com/api/users/@me', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('discord-token')
            })
        });
    };
    DiscordOAuth2Service.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DiscordOAuth2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DiscordOAuth2Service);
    return DiscordOAuth2Service;
}());



/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../game */ "./src/game.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _discord_oauth2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../discord-oauth2.service */ "./src/app/discord-oauth2.service.ts");






var GameComponent = /** @class */ (function () {
    function GameComponent(discordService, route) {
        var _this = this;
        this.discordService = discordService;
        this.route = route;
        this.loader = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Loader"]();
        console.log(this.route.queryParamMap.subscribe(function (querys) {
            if (querys.get('token')) {
                localStorage.setItem('discord-token', querys.get('token'));
                _this.discordService.getUserAvatar().subscribe(function (avatar) { return _this.avatar = avatar; });
                _this.discordService.getUserInfo().subscribe(function (userInfo) { return _this.userInfo = userInfo; });
            }
            else {
                // redirect back
            }
        }));
        this.game = new _game__WEBPACK_IMPORTED_MODULE_3__["Game"](window.innerWidth - 300, window.innerHeight, 0xffffff, false);
        this.game.setLoader(this.loader);
        this.game.start();
        window.onresize = function (event) {
            _this.game.resize(window.innerWidth - 300, window.innerHeight);
        };
    }
    GameComponent.ctorParameters = function () { return [
        { type: _discord_oauth2_service__WEBPACK_IMPORTED_MODULE_5__["DiscordOAuth2Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_discord_oauth2_service__WEBPACK_IMPORTED_MODULE_5__["DiscordOAuth2Service"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/health-bar/health-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/health-bar/health-bar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".health-bar-container {\n  position: absolute;\n  left: calc(50% + 50px);\n  bottom: 60px;\n  width: 200px;\n  height: 40px;\n  border: 5px solid lightgray;\n  display: flex;\n  border-radius: 1.5em;\n  overflow: hidden; }\n  .health-bar-container .fill-bar {\n    width: 80%;\n    height: 40px;\n    background-color: red; }\n  .health-bar-container .empty-bar {\n    width: 20%;\n    height: 40px;\n    background-color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc29tYXRyaXgvRGVza3RvcC92YWxlL3dlYi93ZWJHYW1lL3NyYy9hcHAvaGVhbHRoLWJhci9oZWFsdGgtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTtFQVRwQjtJQVlRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCLEVBQUE7RUFkN0I7SUFrQlEsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC1iYXIvaGVhbHRoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFsdGgtYmFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlICsgNTBweCk7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5maWxsLWJhciB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC5lbXB0eS1iYXIge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/health-bar/health-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/health-bar/health-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HealthBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthBarComponent", function() { return HealthBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HealthBarComponent = /** @class */ (function () {
    function HealthBarComponent() {
    }
    HealthBarComponent.prototype.ngOnInit = function () {
    };
    HealthBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-health-bar',
            template: __webpack_require__(/*! raw-loader!./health-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/health-bar/health-bar.component.html"),
            styles: [__webpack_require__(/*! ./health-bar.component.scss */ "./src/app/health-bar/health-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HealthBarComponent);
    return HealthBarComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page-container {\n  display: grid;\n  grid-template-columns: 1fr 250px 1fr;\n  grid-template-rows: 1fr 250px 1fr;\n  width: 100vw;\n  height: 100vh; }\n  .login-page-container .login-page {\n    grid-column: 2/2;\n    grid-row: 2/2;\n    border: 1px solid lightgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc29tYXRyaXgvRGVza3RvcC92YWxlL3dlYi93ZWJHYW1lL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYSxFQUFBO0VBTGpCO0lBUVEsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1MHB4IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyNTBweCAxZnI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAubG9naW4tcGFnZSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzI7XG4gICAgICAgIGdyaWQtcm93OiAyLzI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route) {
        this.route = route;
        console.log(this.route);
        console.log(this.route.snapshot.paramMap.get('token'));
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.route);
        console.log(this.route.snapshot.paramMap.get('token'));
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shop-button/shop-button.component.scss":
/*!********************************************************!*\
  !*** ./src/app/shop-button/shop-button.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop-btn-container {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  height: 80px;\n  width: 80px;\n  border-radius: 15em;\n  padding-top: 15px;\n  border: 3px solid gray;\n  background-color: #bdbbbb;\n  text-align: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: all 0.3s; }\n  .shop-btn-container:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    background-color: lightgray; }\n  .shop-btn-container img {\n    width: 50px;\n    height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc29tYXRyaXgvRGVza3RvcC92YWxlL3dlYi93ZWJHYW1lL3NyYy9hcHAvc2hvcC1idXR0b24vc2hvcC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTtFQWJ4QjtJQWdCUSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDJCQUEyQixFQUFBO0VBakJuQztJQXFCUSxXQUFXO0lBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvcC1idXR0b24vc2hvcC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcC1idG4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNWVtO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTg3LCAxODcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shop-button/shop-button.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shop-button/shop-button.component.ts ***!
  \******************************************************/
/*! exports provided: ShopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopButtonComponent", function() { return ShopButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopButtonComponent = /** @class */ (function () {
    function ShopButtonComponent() {
    }
    ShopButtonComponent.prototype.ngOnInit = function () {
    };
    ShopButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-button',
            template: __webpack_require__(/*! raw-loader!./shop-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shop-button/shop-button.component.html"),
            styles: [__webpack_require__(/*! ./shop-button.component.scss */ "./src/app/shop-button/shop-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopButtonComponent);
    return ShopButtonComponent;
}());



/***/ }),

/***/ "./src/app/shop-page/shop-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/shop-page/shop-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop-page-container {\n  width: 100vw;\n  height: 150px;\n  background-color: red;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: all 0.3s; }\n\n.closed {\n  margin-bottom: -150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc29tYXRyaXgvRGVza3RvcC92YWxlL3dlYi93ZWJHYW1lL3NyYy9hcHAvc2hvcC1wYWdlL3Nob3AtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvcC1wYWdlL3Nob3AtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wLXBhZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uY2xvc2VkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shop-page/shop-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shop-page/shop-page.component.ts ***!
  \**************************************************/
/*! exports provided: ShopPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageComponent", function() { return ShopPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopPageComponent = /** @class */ (function () {
    function ShopPageComponent() {
        this.shopOpen = false;
    }
    ShopPageComponent.prototype.ngOnInit = function () {
    };
    ShopPageComponent.prototype.shopClicked = function () {
        this.shopOpen = !this.shopOpen;
    };
    ShopPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-page',
            template: __webpack_require__(/*! raw-loader!./shop-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/shop-page/shop-page.component.html"),
            styles: [__webpack_require__(/*! ./shop-page.component.scss */ "./src/app/shop-page/shop-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopPageComponent);
    return ShopPageComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-container {\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 300px;\n  background-color: #7e1dc5;\n  display: flex;\n  flex-flow: column; }\n  .sidebar-container .title-container {\n    height: 40px;\n    text-align: center;\n    padding-top: 18px; }\n  .sidebar-container .title-container .title {\n      font-size: 20px;\n      color: #ffffff; }\n  .sidebar-container .level-container {\n    height: 120px;\n    padding: 18px;\n    display: flex;\n    flex-flow: column; }\n  .sidebar-container .ores-container {\n    display: flex;\n    height: 140px;\n    padding: 18px; }\n  .sidebar-container .stats-container {\n    display: flex;\n    height: 140px;\n    padding: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc29tYXRyaXgvRGVza3RvcC92YWxlL3dlYi93ZWJHYW1lL3NyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBTztFQUNQLE1BQU07RUFDTixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFQckI7SUFVUSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBWnpCO01BZVksZUFBZTtNQUNmLGNBQWMsRUFBQTtFQWhCMUI7SUFxQlEsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7RUF4QnpCO0lBNEJRLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYSxFQUFBO0VBOUJyQjtJQWtDUSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlMWRjNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMThweDtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGV2ZWwtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgfVxuXG4gICAgLm9yZXMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICB9XG5cbiAgICAuc3RhdHMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgcGFkZGluZzogMThweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user-card/user-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-card/user-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-card-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 160px;\n  height: 50px;\n  padding: 15px;\n  border-radius: 0 0 0 1em;\n  display: flex;\n  padding-top: 5px; }\n  .user-card-container .img-container {\n    margin-top: 4px; }\n  .user-card-container .img-container img {\n      width: 50px;\n      height: 50px;\n      border-radius: 15em; }\n  .user-card-container .name-container {\n    color: white;\n    text-align: center;\n    margin-left: 18px;\n    font-size: 18px;\n    margin-top: 20px;\n    font-weight: bold; }\n  .flex {\n  display: flex;\n  position: absolute;\n  width: 100%; }\n  .user-container {\n  height: 60px;\n  border-radius: 0 0 0 2em;\n  display: flex; }\n  .blur-container {\n  border-radius: 0 0 0 1.5em !important; }\n  .container {\n  background: rgba(255, 255, 255, 0.19); }\n  .container:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 0 0 0 2em; }\n  .container::hover .dropdown-container {\n  display: block !important; }\n  .dropdown-container {\n  display: none;\n  position: absolute;\n  margin-top: 65px;\n  width: 190px;\n  right: 0;\n  height: 100px;\n  background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc29tYXRyaXgvRGVza3RvcC92YWxlL3dlYi93ZWJHYW1lL3NyYy9hcHAvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBRVosYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7RUFWbEI7SUFhSSxlQUFlLEVBQUE7RUFibkI7TUFnQk0sV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUIsRUFBQTtFQWxCekI7SUF1QkksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQUlyQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBR2I7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGFBQWEsRUFBQTtFQUdmO0VBQ0kscUNBQXFDLEVBQUE7RUFHekM7RUFDSSxxQ0FBb0MsRUFBQTtFQUd4QztFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHdCQUF5QixFQUFBO0VBRzdCO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0I7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osUUFBUTtFQUNSLGFBQWE7RUFDYixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXItY2FyZC91c2VyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTljO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgLmltZy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDRweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1ZW07XG4gICAgfVxuICB9XG5cbiAgLm5hbWUtY29udGFpbmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ibHVyLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMS41ZW0gIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTkpO1xufVxuXG4uY29udGFpbmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAyZW0gO1xufVxuXG4uY29udGFpbmVyOjpob3ZlciAuZHJvcGRvd24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgd2lkdGg6IDE5MHB4O1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-card/user-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-card/user-card.component.ts ***!
  \**************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _discord_oauth2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../discord-oauth2.service */ "./src/app/discord-oauth2.service.ts");



var UserCardComponent = /** @class */ (function () {
    function UserCardComponent(discordService) {
        this.discordService = discordService;
    }
    UserCardComponent.prototype.ngOnInit = function () {
        // this.discordService.getUserAvatar().subscribe(avatar => this.avatar = avatar);
        // this.avatar = this.discordService.getUserAvatar();
    };
    UserCardComponent.ctorParameters = function () { return [
        { type: _discord_oauth2_service__WEBPACK_IMPORTED_MODULE_2__["DiscordOAuth2Service"] }
    ]; };
    UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-card',
            template: __webpack_require__(/*! raw-loader!./user-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-card/user-card.component.html"),
            styles: [__webpack_require__(/*! ./user-card.component.scss */ "./src/app/user-card/user-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_discord_oauth2_service__WEBPACK_IMPORTED_MODULE_2__["DiscordOAuth2Service"]])
    ], UserCardComponent);
    return UserCardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Player */ "./src/models/Player.ts");
/* harmony import */ var _helpers_keyboardHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/keyboardHelper */ "./src/helpers/keyboardHelper.ts");
/* harmony import */ var _models_Asteroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Asteroid */ "./src/models/Asteroid.ts");
/* harmony import */ var _models_Pickaxe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Pickaxe */ "./src/models/Pickaxe.ts");





var Game = /** @class */ (function () {
    function Game(width, height, backgroundColor, fillPage) {
        if (backgroundColor === void 0) { backgroundColor = 0xffffff; }
        if (fillPage === void 0) { fillPage = false; }
        this.entities = new Array();
        this.keybordHelper = new _helpers_keyboardHelper__WEBPACK_IMPORTED_MODULE_2__["KeyboardHelper"]();
        this.intialResize = false;
        this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
            width: width,
            height: height,
            // backgroundColor,
            transparent: true,
            resolution: window.devicePixelRatio || 1
        });
        this.app.stage.width = this.app.view.width;
        this.app.stage.height = this.app.view.height;
        document.body.appendChild(this.app.view);
        this.app.stage.interactive = true;
        this.app.stage.on('mouseover', function (x) { return console.log(x); });
        this.app.view.style.display = 'block';
        this.app.renderer.autoResize = true;
        if (fillPage) {
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
        }
        Object(pixi_js__WEBPACK_IMPORTED_MODULE_0__["autoDetectRenderer"])({ width: width, height: height });
    }
    Game.prototype.resize = function (width, height) {
        this.app.renderer.resize(width, height);
        this.asteroid.resize(width, height);
    };
    Game.prototype.start = function () {
        this.loadTextures();
    };
    Game.prototype.destroy = function () {
        this.player.destroy();
    };
    Game.prototype.setLoader = function (loader) {
        this.loader = loader;
    };
    Game.prototype.loadTextures = function () {
        var _this = this;
        this.loader
            .add('asteroid', '../assets/asteroid.png')
            .add('player', '../assets/player.png')
            .add('pickaxe', '../assets/pickaxe.png')
            .add('asteroid_hit', '../assets/asteroid_hit.mp3')
            .load(function () { return _this.loadTexturesEnd(); });
    };
    Game.prototype.loadTexturesEnd = function () {
        this.player = new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"](this.keybordHelper);
        this.player.loadTexture(this.loader);
        this.app.stage.addChild(this.player.getSprite());
        this.asteroid = new _models_Asteroid__WEBPACK_IMPORTED_MODULE_3__["Asteroid"]();
        this.asteroid.loadTexture(this.loader);
        this.app.stage.addChild(this.asteroid.getSprite());
        this.pickaxe = new _models_Pickaxe__WEBPACK_IMPORTED_MODULE_4__["Pickaxe"]();
        this.pickaxe.loadTexture(this.loader);
        this.app.stage.addChild(this.pickaxe.getSprite());
        this.runGame();
    };
    Game.prototype.runGame = function () {
        var _this = this;
        this.app.ticker.add(function (delta) {
            if (!_this.intialResize) {
                _this.asteroid.resize(_this.app.view.width, _this.app.view.height);
            }
            _this.player.tick(delta);
            _this.asteroid.tick(delta);
            var position = _this.app.renderer.plugins.interaction.mouse.getLocalPosition(_this.app.stage);
            _this.pickaxe.setPosition(position.x, position.y);
            _this.pickaxe.tick(delta);
        });
    };
    Game.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        null,
        null
    ]; };
    return Game;
}());



/***/ }),

/***/ "./src/helpers/keyboardHelper.ts":
/*!***************************************!*\
  !*** ./src/helpers/keyboardHelper.ts ***!
  \***************************************/
/*! exports provided: KeyboardHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardHelper", function() { return KeyboardHelper; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var KeyboardHelper = /** @class */ (function () {
    function KeyboardHelper() {
        var _this = this;
        this.keysSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.keys = {};
        window.addEventListener("keydown", function (event) { return _this.handleKeyDown(event); }, false);
        window.addEventListener("keyup", function (event) { return _this.handleKeyUp(event); }, false);
        this.keysSubject.subscribe(function (keyEvent) {
            if (!_this.keys[keyEvent.value]) {
                _this.keys[keyEvent.value] = {};
            }
            if (keyEvent.isDown) {
                _this.keys[keyEvent.value].isDown = true;
                _this.keys[keyEvent.value].isUp = false;
            }
            else if (keyEvent.isUp) {
                _this.keys[keyEvent.value].isDown = false;
                _this.keys[keyEvent.value].isUp = true;
            }
        });
    }
    KeyboardHelper.prototype.isKeyDown = function (value) {
        if (this.keys[value]) {
            return this.keys[value].isDown;
        }
        return false;
    };
    KeyboardHelper.prototype.handleKeyDown = function (event) {
        this.keysSubject.next({
            value: event.key,
            isDown: true,
            isUp: false
        });
    };
    KeyboardHelper.prototype.handleKeyUp = function (event) {
        this.keysSubject.next({
            value: event.key,
            isDown: false,
            isUp: true
        });
    };
    return KeyboardHelper;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/Asteroid.ts":
/*!********************************!*\
  !*** ./src/models/Asteroid.ts ***!
  \********************************/
/*! exports provided: Asteroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asteroid", function() { return Asteroid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/models/Entity.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var pixi_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pixi-sound */ "./node_modules/pixi-sound/dist/pixi-sound.esm.js");



// import {  } from 'pixi-sound';

pixi_sound__WEBPACK_IMPORTED_MODULE_3__["default"].Sound;
var Asteroid = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Asteroid, _super);
    function Asteroid() {
        var _this = _super.call(this) || this;
        _this.positionSet = false;
        _this.elapsed = 0.0;
        _this.lastTime = 0.0;
        _this.scale = 1;
        _this.clicked = false;
        _this.scaledTimes = 0;
        _this.textureName = 'asteroid';
        return _this;
    }
    Asteroid.prototype.resize = function (width, height) {
        this.sprite.position.x = width / 2;
        this.sprite.position.y = height / 2;
    };
    Asteroid.prototype.tick = function (delta) {
        var _this = this;
        this.elapsed += delta;
        if (this.elapsed >= 2.2 && this.clicked) {
            if (this.scale >= 2) {
                this.scale -= 0.02;
                this.sprite.scale.set(this.scale);
                this.elapsed = 0;
                this.scaledTimes++;
            }
            else if (this.scale < 2) {
                this.scale += 0.02;
                this.sprite.scale.set(this.scale);
                this.elapsed = 0;
                this.scaledTimes++;
            }
            if (this.scaledTimes >= 4) {
                this.scale = 1;
                this.sprite.scale.set(this.scale);
                this.elapsed = 0;
                this.clicked = false;
                this.scaledTimes = 0;
            }
        }
        if (!this.positionSet) {
            this.sprite.position.x = window.innerWidth / 2;
            this.sprite.position.y = window.innerHeight / 2;
            this.sprite.anchor.set(0.5, 0.5);
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', function (e) {
                _this.clicked = true;
                _this.hitSound.play();
            });
            this.positionSet = true;
        }
        this.lastTime = delta;
    };
    Asteroid.prototype.loadTexture = function (loader) {
        this.sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](loader.resources[this.textureName].texture);
        this.hitSound = pixi_sound__WEBPACK_IMPORTED_MODULE_3__["default"].Sound.from('../assets/asteroid_hit.mp3');
    };
    return Asteroid;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));



/***/ }),

/***/ "./src/models/Entity.ts":
/*!******************************!*\
  !*** ./src/models/Entity.ts ***!
  \******************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");

var Entity = /** @class */ (function () {
    function Entity() {
    }
    Entity.prototype.resize = function (width, height) {
    };
    Entity.prototype.loadTexture = function (loader) {
        this.sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](loader.resources[this.textureName].texture);
    };
    Entity.prototype.tick = function (delta) {
    };
    Entity.prototype.getSprite = function () {
        return this.sprite;
    };
    Entity.prototype.destroy = function () {
        this.sprite.destroy();
    };
    return Entity;
}());



/***/ }),

/***/ "./src/models/Pickaxe.ts":
/*!*******************************!*\
  !*** ./src/models/Pickaxe.ts ***!
  \*******************************/
/*! exports provided: Pickaxe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pickaxe", function() { return Pickaxe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/models/Entity.ts");


var Pickaxe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Pickaxe, _super);
    function Pickaxe() {
        var _this = _super.call(this) || this;
        _this.listenersSet = false;
        _this.elapsed = 0.0;
        _this.lastTime = 0.0;
        _this.rotation = -0.8;
        _this.clicked = false;
        _this.scaledTimes = 0;
        _this.textureName = 'pickaxe';
        return _this;
    }
    Pickaxe.prototype.tick = function (delta) {
        var _this = this;
        this.elapsed += delta;
        if (this.elapsed >= 3 && this.clicked) {
            if (this.rotation <= -2 || this.scaledTimes === 2) {
                this.rotation += 1;
                this.sprite.rotation = this.rotation;
                this.elapsed = 0;
                this.scaledTimes++;
            }
            else if (this.rotation > -2 || this.scaledTimes < 2) {
                this.rotation -= 0.4;
                this.sprite.rotation = this.rotation;
                this.elapsed = 0;
                this.scaledTimes++;
            }
            if (this.scaledTimes >= 4) {
                this.rotation = -0.8;
                this.sprite.rotation = this.rotation;
                this.elapsed = 0;
                this.clicked = false;
                this.scaledTimes = 0;
                // this.sprite.anchor.x = 0.7;
                // this.sprite.anchor.y = 0.3;
            }
        }
        if (!this.listenersSet) {
            this.sprite.rotation = this.rotation;
            // Default rotation
            // this.sprite.anchor.x = 0.7;
            // this.sprite.anchor.y = 0.3;
            this.sprite.anchor.x = 0.2;
            this.sprite.anchor.y = 0.8;
            window.onmousedown = function (event) {
                _this.clicked = true;
            };
            this.listenersSet = true;
        }
        this.lastTime = delta;
    };
    Pickaxe.prototype.setPosition = function (x, y) {
        this.sprite.x = x + 5;
        this.sprite.y = y + 110;
    };
    return Pickaxe;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));



/***/ }),

/***/ "./src/models/Player.ts":
/*!******************************!*\
  !*** ./src/models/Player.ts ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/models/Entity.ts");
/* harmony import */ var src_helpers_keyboardHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/helpers/keyboardHelper */ "./src/helpers/keyboardHelper.ts");



var Player = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Player, _super);
    function Player(keyboardHelper) {
        var _this = _super.call(this) || this;
        _this.keyboardHelper = keyboardHelper;
        _this.speed = 5;
        _this.textureName = 'player';
        return _this;
    }
    Player.prototype.tick = function (delta) {
        if (this.keyboardHelper.isKeyDown('ArrowUp')) {
            this.sprite.position.y -= this.speed;
        }
        if (this.keyboardHelper.isKeyDown('ArrowDown')) {
            this.sprite.position.y += this.speed;
        }
        if (this.keyboardHelper.isKeyDown('ArrowLeft')) {
            this.sprite.position.x -= this.speed;
        }
        if (this.keyboardHelper.isKeyDown('ArrowRight')) {
            this.sprite.position.x += this.speed;
        }
    };
    Player.ctorParameters = function () { return [
        { type: src_helpers_keyboardHelper__WEBPACK_IMPORTED_MODULE_2__["KeyboardHelper"] }
    ]; };
    return Player;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lisomatrix/Desktop/vale/web/webGame/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map