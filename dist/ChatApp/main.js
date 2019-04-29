(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"currentUser\" class=\"header\">\n      <h2>Пользователь: {{currentUser.name}}</h2>\n      <button mat-raised-button (click)=\"clickHandlerExit()\" color=\"accent\" type=\"submit\">Выход</button>\n</header> \n<div class=\"homePage\">\n      <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #3f51b5;\n  z-index: 1;\n  padding: 3px 25px;\n  color: white;\n  font-size: 15px;\n  top: 0; }\n\n.homePage {\n  max-width: 500px;\n  margin: auto;\n  background: white;\n  min-height: 600px;\n  border-radius: 4px;\n  padding: 20px;\n  margin-top: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1dlYi9DaGF0QXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU0sRUFBQTs7QUFHVjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDNweCAyNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0b3A6IDA7XG59XG5cbi5ob21lUGFnZXtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(Service, Router) {
        var _this = this;
        this.currentUser = null;
        this._AppService = Service;
        this._router = Router;
        // подписываемся на сообщения
        this.subscription = this._AppService.getCurrUser()
            .subscribe(function (currUserName) { _this.currentUser = currUserName; });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.currentUser !== null) {
            this.goToChat();
        }
        else
            this.goToLogin();
    };
    AppComponent.prototype.goToLogin = function () {
        this._router.navigate(['login']);
    };
    AppComponent.prototype.goToChat = function () {
        this._router.navigate(['chat']);
    };
    AppComponent.prototype.clickHandlerExit = function () {
        localStorage.removeItem("currentUser");
        this.currentUser = null;
        this._router.navigate(['login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AppService = /** @class */ (function () {
    function AppService() {
        this.users = [];
        this.currentUser = null;
        this.messages = [];
        this.subject = null;
        var usersParsed = JSON.parse(localStorage.getItem('users'));
        this.users = usersParsed ? usersParsed : [];
        var currentUserParsed = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = currentUserParsed ? currentUserParsed : null;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.currentUser); // используем BehaviorSubject для возможности задать начальное значение
        var messagesParsed = JSON.parse(localStorage.getItem('messages'));
        this.messages = messagesParsed ? messagesParsed : [];
    }
    AppService.prototype.sendCurrUser = function (currUserName) {
        this.subject.next({ name: currUserName });
    };
    AppService.prototype.getCurrUser = function () {
        return this.subject.asObservable();
    };
    AppService.prototype.getAllUsers = function () {
        return this.users;
    };
    AppService.prototype.getAllMessages = function () {
        return this.messages;
    };
    AppService.prototype.addUser = function (newUser) {
        if (!newUser.name)
            return;
        var foundUser = this.users.find(function (elem) { return elem.name == newUser.name; });
        if (!foundUser) {
            this.users.push(newUser);
            console.log("всё ок!");
            this.currentUser = newUser;
        }
        else {
            console.log("Повторение!");
            this.currentUser = foundUser;
        }
        this.saveUsers();
        console.log(this.users);
        console.log(this.currentUser);
    };
    AppService.prototype.saveUsers = function () {
        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    };
    AppService.prototype.addMessage = function (newMessage) {
        if (!newMessage.text)
            return;
        else {
            this.messages.push(newMessage);
            this.saveMessages();
            console.log(this.messages);
        }
    };
    AppService.prototype.saveMessages = function () {
        localStorage.setItem('messages', JSON.stringify(this.messages));
    };
    return AppService;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\n  <div class=\"messagesBlock\">\n    <div\n      *ngFor=\"let mess of myMessages; let i = index\" \n      [ngClass]=\"{\n        'message': true,\n        '--currentUser': mess.author.name === currentUser.name\n      }\"\n    >\n      <div class=\"message__authorName\" *ngIf=\"i==0 && mess.author.name!=currentUser.name\">\n        {{mess.author.name}}\n      </div>\n      <div class=\"message__authorName\" *ngIf=\"i!=0 && mess.author.name!=currentUser.name && myMessages[i-1].author.name != mess.author.name \">\n        {{mess.author.name}}\n      </div>\n      <div class=\"message__bubble\">\n        {{mess.text}}\n      </div>\n    </div>\n  </div>\n  <form class=\"inputForm\">\n    <mat-form-field class=\"inputForm__input\">\n      <input matInput [(ngModel)]=\"message.text\" name=\"name\" type=\"text\" placeholder=\"Введите сообщение\">\n    </mat-form-field>\n    <button mat-icon-button color=\"accent\" (click)=\"submitHandler($event)\" type=\"submit\">\n      <mat-icon class=\"inputForm__button\">send</mat-icon>\n    </button> \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\n  min-height: 700px;\n  margin: auto;\n  font-size: 15px;\n  background-color: white;\n  padding-top: 15px; }\n\n.messagesBlock {\n  height: 70vh;\n  overflow-y: scroll;\n  padding: 20px;\n  border: solid 2px #edeef0;\n  border-radius: 4px;\n  margin: auto;\n  margin-bottom: 20px; }\n\n.message {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 4px;\n  color: #686868; }\n\n.message.--currentUser {\n    align-items: flex-end;\n    color: #4646f0; }\n\n.message.--currentUser .message__bubble {\n      background-color: #d3e2ff;\n      border: solid 1px #acc7fc; }\n\n.message__authorName {\n  font-weight: bold;\n  font-size: 17px;\n  margin: 5px 0px; }\n\n.message__bubble {\n  background-color: #edeef0;\n  border: solid 1px #d6d7d8;\n  border-radius: 6px;\n  padding: 8px;\n  max-width: 60%;\n  word-wrap: break-word; }\n\n.inputForm {\n  border: solid 2px #edeef0;\n  border-radius: 4px;\n  margin-top: 10px;\n  padding: 10px;\n  margin: auto; }\n\n.inputForm__button {\n  font-size: 35px; }\n\n.inputForm__input {\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1dlYi9DaGF0QXBwL3NyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQWRhO0VBZWIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBeUIsRUFBQTs7QUFMN0I7SUFPUSxxQkFBcUI7SUFDckIsY0FBc0IsRUFBQTs7QUFSOUI7TUFVZ0IseUJBQXlCO01BQ3pCLHlCQUF5QixFQUFBOztBQUt6QztFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLHlCQTNDYTtFQTRDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kseUJBcERhO0VBcURiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnQ29sb3I6ICNlZGVlZjA7XG5cbi5jaGF0IHtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBwYWRkaW5nLXRvcDogMTVweDsgIFxufVxuXG4ubWVzc2FnZXNCbG9jayB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4ICRiZ0NvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6IHJnYigxMDQsIDEwNCwgMTA0KTtcbiAgICAmLi0tY3VycmVudFVzZXJ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgY29sb3I6cmdiKDcwLCA3MCwgMjQwKTtcbiAgICAgICAgICAgIC5tZXNzYWdlX19idWJibGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2UyZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2FjYzdmYztcbiAgICAgICAgICAgIH1cbiAgICB9XG59XG5cbi5tZXNzYWdlX19hdXRob3JOYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4ubWVzc2FnZV9fYnViYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDZkN2Q4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uaW5wdXRGb3JtIHsgXG4gICAgYm9yZGVyOiBzb2xpZCAycHggJGJnQ29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5pbnB1dEZvcm1fX2J1dHRvbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uaW5wdXRGb3JtX19pbnB1dCB7XG4gICAgd2lkdGg6IDkwJTsgXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(Service, Router) {
        var _this = this;
        this.currentUser = null;
        this.message = {
            author: null,
            text: ""
        };
        this._AppService = Service;
        this._router = Router;
        this.subscription = this._AppService.getCurrUser()
            .subscribe(function (currUserName) { _this.currentUser = currUserName; });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.message.author = this.currentUser;
        this.myMessages = this._AppService.getAllMessages();
    };
    ChatComponent.prototype.submitHandler = function (event) {
        event.preventDefault();
        var newMessage = {
            author: this.message.author,
            text: this.message.text
        };
        this._AppService.addMessage(newMessage);
        this.message.text = "";
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"loginForm\" (submit)=\"submitHandler($event)\">\n  <div class=\"loginForm__headline\">\n    <div class=\"mat-headline\"> Авторизация</div>\n  </div>\n  <div class=\"inputContainer\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"user.name\" name=\"name\" placeholder=\"Введите имя\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Войти</button>\n  </div>\n</form> "

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\n  text-align: center; }\n\n.loginForm__headline {\n  padding-top: 30px; }\n\n.inputContainer {\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  padding: 70px 40px 60px 40px;\n  background-color: white;\n  border: solid 2px #edeef0;\n  border-radius: 4px;\n  transition: 0.6s;\n  margin: auto; }\n\n.inputContainer:hover {\n  background-color: #edeef0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1dlYi9DaGF0QXBwL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQiw0QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHlCQWhCYTtFQWlCYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlCQXZCYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmdDb2xvcjogI2VkZWVmMDtcblxuLmxvZ2luRm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5sb2dpbkZvcm1fX2hlYWRsaW5lIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5pbnB1dENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogIDcwcHggNDBweCA2MHB4IDQwcHggO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICRiZ0NvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuIFxuICAuaW5wdXRDb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xuICB9Il19 */"

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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(Service, Router) {
        this.user = {
            name: ""
        };
        this._AppService = Service;
        this._router = Router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goToChat = function () {
        this._router.navigate(['chat']);
    };
    LoginComponent.prototype.submitHandler = function (event) {
        event.preventDefault();
        var newUser = {
            name: this.user.name,
        };
        if (this.user.name == "")
            return;
        if (newUser.name.search(/\S/) == -1)
            return;
        this._AppService.addUser(newUser);
        this.user.name = '';
        this.goToChat();
        this._AppService.sendCurrUser(newUser.name);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anna/Web/ChatApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map